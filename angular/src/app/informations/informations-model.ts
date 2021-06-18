import { GenericModel } from 'src/app/shared/model/generic-model';
import { i18n } from 'src/i18n';
import DateTimeField from 'src/app/shared/fields/date-time-field';
import IdField from 'src/app/shared/fields/id-field';
import DateTimeRangeField from 'src/app/shared/fields/date-time-range-field';
import StringField from 'src/app/shared/fields/string-field';
import { InformationCategoryField } from 'src/app/information-category/information-category-field';
import { TagsField } from 'src/app/tags/tags-field';
import { Storage } from 'src/security/storage';
import FilesField from 'src/app/shared/fields/files-field';
import ImagesField from 'src/app/shared/fields/images-field';
import EnumeratorField from 'src/app/shared/fields/enumerator-field';
function label(name) {
  return i18n(`entities.informations.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.informations.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  category: InformationCategoryField.relationToOne('category', label('category'), {
    "required": true
  }),
  titleFR: new StringField('titleFR', label('titleFR'), {
    "required": true
  }),
  titreEN: new StringField('titreEN', label('titreEN'), {
    "required": true
  }),
  titreAR: new StringField('titreAR', label('titreAR'), {
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
  images: new ImagesField('images', label('images'),Storage.values.informationsImages, {}),
  document: new FilesField('document', label('document'), Storage.values.informationsDocument, {}),
  videos: new StringField('videos', label('videos'), {}),

  addressFR: new StringField('addressFR', label('addressFR')),
  addressEN: new StringField('addressEN', label('addressEN')),
  addressAR: new StringField('addressAR', label('addressAR')),

  num_Tel: new StringField('num_Tel', label('num_Tel'), {}),
  email: new StringField('email', label('email'), {}),
 
  type: new EnumeratorField('type', label('type'), [
    { id: 'information', label: enumeratorLabel('type', 'information') },
    { id: 'news', label: enumeratorLabel('type', 'news') },

  ],{
    "required": true
  }),

  publish: new EnumeratorField('publish', label('publish'), [
    { id: 'true', label: enumeratorLabel('publish', 'true') },
    { id: 'false', label: enumeratorLabel('publish', 'false') },

  ],{
    "required": true
  }),


  site_web: new StringField('site_web', label('site_web'), {}),
  googleMapsPosition: new StringField('googleMapsPosition', label('googleMapsPosition'), {}),
  tags: TagsField.relationToMany('tags', label('tags'), {
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

export class InformationsModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
