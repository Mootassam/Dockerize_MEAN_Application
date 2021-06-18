import {
  Component,
  OnInit,
  Output,
  Input,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivityModel } from 'src/app/activity/activity-model';
import { FormSchema } from 'src/app/shared/form/form-schema';

@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
})
export class ActivityFormComponent implements OnInit {
  form: FormGroup;
  schema: FormSchema;
  testimonyId;

  @Output() save = new EventEmitter();
  @Output() cancel = new EventEmitter();
  @Input() isEditing;
  @Input() record;
  @Input() saveLoading;
  @Input() modal = false;
  constructor(private formBuilder: FormBuilder) {

    this.testimonyId = localStorage.getItem('testimonyId');
  }
  
  async ngOnInit() {
    this.buildSchema();
    this.buildForm();
  }
  
  get fields() {
    return ActivityModel.fields;
  }
  
  doSave() {
    if (!this.form.valid) {
      return;
    }
    
    const id = this.record && this.record.id;
    const values = this.schema.cast(this.form.value);
    values.testimony = this.testimonyId;
    this.save.emit({ id, values });
  }
  
  doReset() {
    this.buildForm();
  }
  
  buildForm() {
    this.form = this.schema.buildForm(this.record);
  }

  private buildSchema() {
    this.schema = new FormSchema(
      [
        this.fields.comment,
        this.fields.date,
        this.fields.images,
        this.fields.audio,
        this.fields.documents,
        this.fields.video,
        this.fields.position,
        this.fields.testimony
      ],
      this.formBuilder,
    );
  }
}
