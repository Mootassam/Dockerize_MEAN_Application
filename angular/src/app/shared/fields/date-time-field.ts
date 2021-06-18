import GenericField from 'src/app/shared/fields/generic-field';
import * as yup from 'yup';
import * as moment from 'moment';
import { FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/shared/form/validations/custom-validators';

export default class DateTimeField extends GenericField {
  public required: boolean;

  constructor(name, label, { required = false } = {}) {
    super(name, label);

    this.required = required;
  }

  forPresenter(value) {
    return value
      ? moment(value).format('YYYY-MM-DD HH:mm')
      : null;
  }

  forFormControl(value) {
    const validators = [CustomValidators.datetime()];

    if (this.required) {
      validators.push(Validators.required);
    }

    return new FormControl(
      value ? moment(value).toDate() : null,
      validators,
    );
  }

  forFormCast() {
    let yupChain = yup
      .mixed()
      .nullable(true)
      .transform((value, originalValue) => {
        if (!originalValue) {
          return null;
        }

        return moment(originalValue).toISOString();
      })
      .label(this.label);

    return yupChain;
  }

  forExport() {
    return yup.mixed().label(this.label);
  }

  forImport() {
    let yupChain = yup
      .mixed()
      .nullable(true)
      .label(this.label)
      .transform((value, originalValue) =>
        originalValue
          ? moment(
              originalValue,
              'YYYY-MM-DD HH:mm',
            ).toISOString()
          : null,
      );

    if (this.required) {
      yupChain = yupChain.required();
    }

    return yupChain;
  }

  forFilterPreview(value) {
    return value
      ? moment(value).format('YYYY-MM-DD HH:mm')
      : null;
  }
}
