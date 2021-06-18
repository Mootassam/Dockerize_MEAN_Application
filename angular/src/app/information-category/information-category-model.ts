import { GenericModel } from 'src/app/shared/model/generic-model';
import { i18n } from 'src/i18n';
import DateTimeField from 'src/app/shared/fields/date-time-field';
import IdField from 'src/app/shared/fields/id-field';
import DateTimeRangeField from 'src/app/shared/fields/date-time-range-field';
import StringField from 'src/app/shared/fields/string-field';

function label(name) {
  return i18n(`entities.informationCategory.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  titleFR: new StringField('titleFR', label('titleFR'), {
    "required": true
  }),
  titleEN: new StringField('titleEN', label('titleEN'), {
    "required": true
  }),
  titleAR: new StringField('titleAR', label('titleAR'), {
    "required": true
  }),
  descriptionFR: new StringField('descriptionFR', label('descriptionFR'), {
    "required": true
  }),
  descriptionEN: new StringField('descriptionEN', label('descriptionEN'), {
    "required": true
  }),
  descriptionAR: new StringField('descriptionAR', label('descriptionAR'), {
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

export class InformationCategoryModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
