import {
  Component,
  OnInit,
  Output,
  Input,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PartnerModel } from 'src/app/partner/partner-model';
import { FormSchema } from 'src/app/shared/form/form-schema';

@Component({
  selector: 'app-partner-form',
  templateUrl: './partner-form.component.html',
})
export class PartnerFormComponent implements OnInit {
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
    return PartnerModel.fields;
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
        this.fields.category,
        this.fields.title,
        this.fields.desription,
        this.fields.phone,
        this.fields.mobile,
        this.fields.address,
        this.fields.email,
      ],
      this.formBuilder,
    );
  }
}
