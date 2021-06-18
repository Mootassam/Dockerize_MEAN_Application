import GenericField from 'src/app/shared/fields/generic-field';
import * as yup from 'yup';
import * as moment from 'moment';
import { i18n } from 'src/i18n';
import { FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/shared/form/validations/custom-validators';

export default class DateField extends GenericField {
  public required: boolean;

  constructor(name, label, { required = false } = {}) {
    super(name, label);

    this.required = required;
  }

  forPresenter(value) {
    return value;
  }

  forFilterPreview(value) {
    return value
      ? moment(value).format('YYYY-MM-DD')
      : null;
  }

  forFilterControl(value) {
    const validators = [CustomValidators.date()];
    return new FormControl(value, validators);
  }

  forFilterCast() {
    let yupChain = yup
      .mixed()
      .nullable(true)
      .label(this.label)
      .transform((value) =>
        value ? moment(value).format('YYYY-MM-DD') : null,
      );

    return yupChain;
  }

  forFormControl(value) {
    const validators = [CustomValidators.date()];

    if (this.required) {
      validators.push(Validators.required);
    }

    return new FormControl(value, validators);
  }

  forFormCast() {
    let yupChain = yup
      .mixed()
      .nullable(true)
      .label(this.label)
      .transform((value) =>
        value ? moment(value).format('YYYY-MM-DD') : null,
      );

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
      .test(
        'is-date',
        i18n('validation.mixed.default'),
        (value) => {
          if (!value) {
            return true;
          }

          return moment(value, 'YYYY-MM-DD').isValid();
        },
      );

    if (this.required) {
      yupChain = yupChain.required();
    }

    return yupChain;
  }
}
