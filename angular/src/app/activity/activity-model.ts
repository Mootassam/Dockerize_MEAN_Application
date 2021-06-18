import { GenericModel } from 'src/app/shared/model/generic-model';
import { i18n } from 'src/i18n';
import DateTimeField from 'src/app/shared/fields/date-time-field';
import IdField from 'src/app/shared/fields/id-field';
import DateTimeRangeField from 'src/app/shared/fields/date-time-range-field';
import StringField from 'src/app/shared/fields/string-field';
import { Storage } from 'src/security/storage';
import FilesField from 'src/app/shared/fields/files-field';
import ImagesField from 'src/app/shared/fields/images-field';
import { TestimonyField } from 'src/app/testimony/testimony-field';

function label(name) {
  return i18n(`entities.activity.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  comment: new StringField('comment', label('comment'), {
    "required": true
  }),
  date: new DateTimeField(
    'date',
    label('date'),
  ),
  images: new ImagesField('images', label('images'),Storage.values.activityImages, {}),
  audio: new FilesField('audio', label('audio'), Storage.values.activityAudio, {
    "max": 1,
    "formats": [
      "mp3"
    ]
  }),
  documents: new FilesField('documents', label('documents'), Storage.values.activityDocuments, {
    "formats": [
      "pdf",
      "doc"
    ]
  }),
  video: new FilesField('video', label('video'), Storage.values.activityVideo, {
    "max": 1,
    "formats": [
      "mp4"
    ]
  }),
  position: new StringField('position', label('position'), {}),
  testimony: TestimonyField.relationToOne('testimony', label('testimony'), {}),
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

export class ActivityModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
