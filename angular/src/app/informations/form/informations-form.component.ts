import {
  Component,
  OnInit,
  Output,
  Input,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InformationsModel } from 'src/app/informations/informations-model';
import { FormSchema } from 'src/app/shared/form/form-schema';

@Component({
  selector: 'app-informations-form',
  templateUrl: './informations-form.component.html',
})
export class InformationsFormComponent implements OnInit {
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
    return InformationsModel.fields;
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
        this.fields.titleFR,
        this.fields.titreEN,
        this.fields.titreAR,
        this.fields.descriptionFR,
        this.fields.descriptionEN,
        this.fields.descriptionAR,
        this.fields.addressFR,
        this.fields.addressAR,
        this.fields.addressEN,
        this.fields.publish,
        this.fields.type,
        this.fields.num_Tel, 
        this.fields.site_web, 
        
        this.fields.email, 
        this.fields.images,
        this.fields.document,
        this.fields.videos,
        this.fields.googleMapsPosition,
        this.fields.tags,
      ],
      this.formBuilder,
    );
  }
}
