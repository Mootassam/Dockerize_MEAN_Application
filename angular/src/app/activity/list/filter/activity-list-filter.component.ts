import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FilterSchema } from 'src/app/shared/form/filter-schema';
import { ActivityListService } from 'src/app/activity/list/activity-list.service';
import { ActivityModel } from 'src/app/activity/activity-model';

@Component({
  selector: 'app-activity-list-filter',
  templateUrl: './activity-list-filter.component.html',
})
export class ActivityListFilterComponent implements OnInit {
  form: FormGroup;
  schema: FilterSchema;
  expanded: boolean = false;

  constructor(
    private service: ActivityListService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) {}

  async ngOnInit() {
    this.buildSchema();
    this.buildForm();
    this.doFilter();
  }

  get fields() {
    return ActivityModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  doToggleExpanded() {
    this.expanded = !this.expanded;
  }

  doFilter() {
    if (!this.form.valid) {
      return;
    }

    this.expanded = false;
    const values = this.schema.cast(this.form.value);
    return this.service.doFetch(values);
  }

  buildForm() {
    const { filter } = this.service;
    const params = this.route.snapshot.queryParams;
    this.form = this.schema.buildForm(filter, params);
  }

  doReset() {
    this.form = this.schema.buildForm();
    this.doFilter();
    this.expanded = false;
  }

  private buildSchema() {
    this.schema = new FilterSchema(
      [
        this.fields.comment,
        this.fields.position,
      ],
      this.formBuilder,
    );
  }
}
