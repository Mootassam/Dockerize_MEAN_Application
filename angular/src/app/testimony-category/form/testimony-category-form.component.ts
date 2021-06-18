import {
  Component,
  OnInit,
  Output,
  Input,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TestimonyCategoryModel } from 'src/app/testimony-category/testimony-category-model';
import { FormSchema } from 'src/app/shared/form/form-schema';

@Component({
  selector: 'app-testimony-category-form',
  templateUrl: './testimony-category-form.component.html',
})
export class TestimonyCategoryFormComponent implements OnInit {
  form: FormGroup;
  schema: FormSchema;

  @Output() save = new EventEmitter();
  @Output() cancel = new EventEmitter();
  @Input() isEditing;
  @Input() record;
  @Input() saveLoading;
  @Input() modal = false;

  constructor(private formBuilder: FormBuilder) {}

  async ngOnInit() {
    this.buildSchema();
    this.buildForm();
  }

  get fields() {
    return TestimonyCategoryModel.fields;
  }

  doSave() {
    if (!this.form.valid) {
      return;
    }

    const id = this.record && this.record.id;
    const values = this.schema.cast(this.form.value);

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
        this.fields.titleFR,
        this.fields.titleEN,
        this.fields.titleAR,
        this.fields.descriptionFR,
        this.fields.descriptionEN,
        this.fields.descriptionAR,
      ],
      this.formBuilder,
    );
  }
}
