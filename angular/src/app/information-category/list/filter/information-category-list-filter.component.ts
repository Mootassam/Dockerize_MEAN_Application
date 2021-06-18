import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FilterSchema } from 'src/app/shared/form/filter-schema';
import { InformationCategoryListService } from 'src/app/information-category/list/information-category-list.service';
import { InformationCategoryModel } from 'src/app/information-category/information-category-model';

@Component({
  selector: 'app-information-category-list-filter',
  templateUrl: './information-category-list-filter.component.html',
})
export class InformationCategoryListFilterComponent implements OnInit {
  form: FormGroup;
  schema: FilterSchema;
  expanded: boolean = false;

  constructor(
    private service: InformationCategoryListService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) {}

  async ngOnInit() {
    this.buildSchema();
    this.buildForm();
    this.doFilter();
  }

  get fields() {
    return InformationCategoryModel.fields;
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
        this.fields.titleFR,
        this.fields.titleEN,
        this.fields.titleAR,
      ],
      this.formBuilder,
    );
  }
}
