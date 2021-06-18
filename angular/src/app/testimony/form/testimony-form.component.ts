import {
  Component,
  OnInit,
  Output,
  Input,
  EventEmitter,
  TemplateRef,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TestimonyModel } from 'src/app/testimony/testimony-model';
import { FormSchema } from 'src/app/shared/form/form-schema';
import { ActivityModel } from '../../activity/activity-model';
import { i18n } from 'src/i18n';
import { ActivityListService } from 'src/app/activity/list/activity-list.service';
import { TestimonyFormPageService } from 'src/app/testimony/form/testimony-form-page.service';
import { ActivityDestroyService } from 'src/app/activity/destroy/activity-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { ActivatedRoute } from '@angular/router';
import { FilterSchema } from 'src/app/shared/form/filter-schema';
import { TestimonyService } from 'src/app/testimony/testimony.service';
import { AuthService } from 'src/app/auth/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from 'src/app/shared/alert/alert.component';
import {environment} from 'src/environments/environment.localhost'

import * as io  from "socket.io-client";
import * as moment from 'moment'
@Component({
  selector: 'app-testimony-form',
  templateUrl: './testimony-form.component.html',

})
export class TestimonyFormComponent implements OnInit {
  socket :any ; 
  expanded: boolean = false;
  formActivity: FormGroup;
  schemaActivity: FormSchema;

  form: FormGroup;
  schema: FormSchema;

  @Output() save = new EventEmitter();
  @Output() cancel = new EventEmitter();
  @Input() isEditing;
  @Input() record;
  @Input() saveLoading;
  @Input() modal = false;
  displayedColumns: string[] = ['comment', 'position', 'images', 'symbol'];
  dataSource: any;

  userRole: any;

  constructor(
    private formBuilder: FormBuilder,
    public service: TestimonyFormPageService,
    public destroyService: ActivityDestroyService,
    private confirmService: ConfirmService,
    private route: ActivatedRoute,
    private testimonyService: TestimonyService,
    private authService: AuthService,
    public dialog: MatDialog
    
    ) {
        this.socket = io(environment.urlsocket); 
    }

  async ngOnInit() {
    this.buildSchema();
    this.buildForm();

    if(this.isEditing){
      localStorage.setItem('testimonyId',this.record._id);
      this.buildSchemaActivity();
      this.buildFormActiviy();
      this.doFilter();
    }
  }

  get fields() {
    return TestimonyModel.fields;
  }

  get activityFields() {
    return ActivityModel.fields;
  }

  presenter(row, fieldName) {
    return TestimonyModel.presenter(row, fieldName);
  }

  presenterActivity(row, fieldName) {
    return ActivityModel.presenter(row, fieldName);
  }
  get loading() {
    return this.service.loading;
  }

  doToggleExpanded() {
    this.expanded = !this.expanded;
  }

  doFilter() {
    if (!this.formActivity.valid) {
      return;
    }

    this.expanded = false;
    const values = this.schemaActivity.cast(this.formActivity.value);
    return this.service.doFetch(values);
  }  
  buildFormActiviy() {
    const { filter } = this.service;
    const params = this.route.snapshot.queryParams;
    this.formActivity = this.schemaActivity.buildForm(filter, params);
  }

  private buildSchemaActivity() {
    this.schemaActivity = new FilterSchema(
      [
        this.activityFields.comment,
        this.activityFields.position,
      ],
      this.formBuilder,
    );
  }

doResetActivity() {
    this.formActivity = this.schemaActivity.buildForm();
    this.doFilter();
    this.expanded = false;
  }

  i18n(key) {
    return i18n(key);
  }

  doSave() {
    if (!this.form.valid) {
      const title = i18n('common.required');
      const yesLabel = i18n('common.ok');
      return this.dialog.open(AlertComponent, {
        width: '250px',
        data: {
          title,
          yesLabel,
        },
      });
    }

    this.authService.currentUser.tenants[0].roles.forEach(element => {
      if(element == 'member'){
        this.userRole = element;
      }
    });
    const id = this.record && this.record.id;
    if(this.form.value.assignedTo == null && this.userRole == 'member'){
      const data = {
        id: this.authService.currentUser.id,
        label: this.authService.currentUser.fullName
      }
      this.form.value.assignedTo = data;
    }
    if(this.form.value.status == 'open' && this.form.value.assignedTo == null){
      const data = {
        id: this.authService.currentUser.id,
        label: this.authService.currentUser.fullName
      }
      this.form.value.assignedTo = data;
    }
    if(this.form.value.status == 'waiting' && this.form.value.assignedTo != null){
      this.form.value.status = 'open';
    }
    const values = this.schema.cast(this.form.value);
       this.save.emit({ id, values });
              
       this.socket.emit('refresh',{})


  }

  doReset() {
    this.buildForm();
  }

  buildForm() {
    if(this.isEditing){
      this.form = this.schema.buildForm(this.record);
    }
    if(!this.isEditing){
      this.form = this.schema.buildForm({
        priority: "low",
        status: "waiting"
      });
    }
  }

  get hasPermissionToAssignTestimonyToUser() {
    return this.testimonyService.hasPermissionToAssignTestimonyToUser;
  }

  async doDestroy(id) {
    const response = await this.confirmService.confirm();

    if (!response) {
      return;
    }
    this.ngOnInit();
    return this.destroyService.doDestroy(id);
  }
  date(date){ 
    return moment(date).format('ll');
  }

  private buildSchema() {
    this.schema = new FormSchema(
      [
        this.fields.category,
        this.fields.title,
        this.fields.description,
        this.fields.region,
        this.fields.testimonyType,
        this.fields.status,
        this.fields.priority,
        this.fields.assignedTo,
        this.fields.images,
        this.fields.audio,
        this.fields.documents,
        this.fields.videos,
        this.fields.position,
        this.fields.anonymous,
        this.fields.activity,
        this.fields.tags,
        this.fields.transferTo,
        this.fields.contact,
      ],
      this.formBuilder,
    );
  }

  get columns() {
    return [
      // '_select',

      this.activityFields.comment.name,
      this.activityFields.images.name,
      this.activityFields.audio.name,
      this.activityFields.documents.name,
      this.activityFields.video.name,
      this.activityFields.position.name,
      this.activityFields.createdAt.name,

      '_actions',
    ];
  }
}
