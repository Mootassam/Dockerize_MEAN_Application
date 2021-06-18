import { GenericModel } from 'src/app/shared/model/generic-model';
import { i18n } from 'src/i18n';
import DateTimeField from 'src/app/shared/fields/date-time-field';
import IdField from 'src/app/shared/fields/id-field';
import DateTimeRangeField from 'src/app/shared/fields/date-time-range-field';
import StringField from 'src/app/shared/fields/string-field';
import EnumeratorField from 'src/app/shared/fields/enumerator-field';
import BooleanField from 'src/app/shared/fields/boolean-field';
import { TestimonyCategoryField } from 'src/app/testimony-category/testimony-category-field';
import { ActivityField } from 'src/app/activity/activity-field';
import { TagsField } from 'src/app/tags/tags-field';
import { PartnerField } from 'src/app/partner/partner-field';
import { UserField } from 'src/app/user/user-field';
import { Storage } from 'src/security/storage';
import FilesField from 'src/app/shared/fields/files-field';
import ImagesField from 'src/app/shared/fields/images-field';

function label(name) {
  return i18n(`entities.testimony.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.testimony.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  category: TestimonyCategoryField.relationToOne('category', label('category'), {
    "required": true
  }),
  title: new StringField('title', label('title'), {
    "required": true
  }),
  contact: new StringField('contact', label('contact'), {}),
  testimonyType: new EnumeratorField('testimonyType', label('testimonyType'), [
    { id: 'testimony', label: enumeratorLabel('testimonyType', 'testimony') },
    { id: 'assistance', label: enumeratorLabel('testimonyType', 'assistance') },
  ],{}),
  description: new StringField('description', label('description'), {
    "required": true 
  }),
  region: new EnumeratorField('region', label('region'), [
    { id: 'tunis', label: enumeratorLabel('region', 'tunis') },
    { id: 'ariana', label: enumeratorLabel('region', 'ariana') },
    { id: 'beja', label: enumeratorLabel('region', 'beja') },
    { id: 'ben_arouss', label: enumeratorLabel('region', 'ben_arouss') },
    { id: 'bizerte', label: enumeratorLabel('region', 'bizerte') },
    { id: 'gabes', label: enumeratorLabel('region', 'gabes') },
    { id: 'gafsa', label: enumeratorLabel('region', 'gafsa') },
    { id: 'jendouba', label: enumeratorLabel('region', 'jendouba') },
    { id: 'kairouan', label: enumeratorLabel('region', 'kairouan') },
    { id: 'kasserine', label: enumeratorLabel('region', 'kasserine') },
    { id: 'kebili', label: enumeratorLabel('region', 'kebili') },
    { id: 'kef', label: enumeratorLabel('region', 'kef') },
    { id: 'mahdia', label: enumeratorLabel('region', 'mahdia') },
    { id: 'manouba', label: enumeratorLabel('region', 'manouba') },
    { id: 'medenine', label: enumeratorLabel('region', 'medenine') },
    { id: 'monastir', label: enumeratorLabel('region', 'monastir') },
    { id: 'nabeul', label: enumeratorLabel('region', 'nabeul') },
    { id: 'sfax', label: enumeratorLabel('region', 'sfax') },
    { id: 'sidi_bouzid', label: enumeratorLabel('region', 'sidi_bouzid') },
    { id: 'siliana', label: enumeratorLabel('region', 'siliana') },
    { id: 'sousse', label: enumeratorLabel('region', 'sousse') },
    { id: 'tataouine', label: enumeratorLabel('region', 'tataouine') },
    { id: 'tozeur', label: enumeratorLabel('region', 'tozeur') },
    { id: 'zaghouan', label: enumeratorLabel('region', 'zaghouan') },
  ],{}),
  status: new EnumeratorField('status', label('status'), [
    { id: 'waiting', label: enumeratorLabel('status', 'waiting') },
    { id: 'open', label: enumeratorLabel('status', 'open') },
    { id: 'closed', label: enumeratorLabel('status', 'closed') },
    { id: 'canceled', label: enumeratorLabel('status', 'canceled') },
  ],{
    "required": true
  }),
  priority: new EnumeratorField('priority', label('priority'), [
    { id: 'low', label: enumeratorLabel('priority', 'low') },
    { id: 'medium', label: enumeratorLabel('priority', 'medium') },
    { id: 'high', label: enumeratorLabel('priority', 'high') },
  ],{
    "required": true
  }),
  assignedTo: UserField.relationToOne('assignedTo', label('assignedTo'), {}),
  createdBy: UserField.relationToOne('createdBy', label('createdBy'), {}),
  images: new ImagesField('images', label('images'),Storage.values.testimonyImages, {}),
  audio: new FilesField('audio', label('audio'), Storage.values.testimonyAudio, {
    "formats": [
      "mp3"
    ]
  }),
  documents: new FilesField('documents', label('documents'), Storage.values.testimonyDocuments, {
    "formats": [
      "pdf",
      "doc"
    ]
  }),
  videos: new FilesField('videos', label('videos'), Storage.values.testimonyVideos, {}),
  position: new StringField('position', label('position'), {}),
  anonymous: new BooleanField('anonymous', label('anonymous')),
  activity: ActivityField.relationToMany('activity', label('activity'), {}),
  tags: TagsField.relationToMany('tags', label('tags'), {}),
  transferTo: PartnerField.relationToOne('transferTo', label('transferTo'), {}),
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

export class TestimonyModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
