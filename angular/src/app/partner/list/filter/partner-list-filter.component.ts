import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FilterSchema } from 'src/app/shared/form/filter-schema';
import { PartnerListService } from 'src/app/partner/list/partner-list.service';
import { PartnerModel } from 'src/app/partner/partner-model';

@Component({
  selector: 'app-partner-list-filter',
  templateUrl: './partner-list-filter.component.html',
})
export class PartnerListFilterComponent implements OnInit {
  form: FormGroup;
  schema: FilterSchema;
  expanded: boolean = false;

  constructor(
    private service: PartnerListService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) {}

  async ngOnInit() {
    this.buildSchema();
    this.buildForm();
    this.doFilter();
  }

  get fields() {
    return PartnerModel.fields;
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
        this.fields.category,
        this.fields.title,
        this.fields.phone,
        this.fields.mobile,
        this.fields.email,
      ],
      this.formBuilder,
    );
  }
}
