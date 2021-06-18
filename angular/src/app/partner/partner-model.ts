import { GenericModel } from 'src/app/shared/model/generic-model';
import { i18n } from 'src/i18n';
import DateTimeField from 'src/app/shared/fields/date-time-field';
import IdField from 'src/app/shared/fields/id-field';
import DateTimeRangeField from 'src/app/shared/fields/date-time-range-field';
import StringField from 'src/app/shared/fields/string-field';
import { PartnerCategoryField } from 'src/app/partner-category/partner-category-field';

function label(name) {
  return i18n(`entities.partner.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  category: PartnerCategoryField.relationToOne('category', label('category'), {
    "required": true
  }),
  title: new StringField('title', label('title'), {
    "required": true
  }),
  desription: new StringField('desription', label('desription'), {}),
  phone: new StringField('phone', label('phone'), {}),
  mobile: new StringField('mobile', label('mobile'), {}),
  address: new StringField('address', label('address'), {}),
  email: new StringField('email', label('email'), {
    "required": true
  }),
  createdAt: new DateTimeField(
    'createdAt',
    label('createdAt'),
  ),
  updatedAt: new DateTimeField(
    'updatedAt',
    label('updatedAt'),
  ),
  createdAtRange: new DateTimeRangeField(
    'createdAtRange',
    label('createdAtRange'),
  ),

};

export class PartnerModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
