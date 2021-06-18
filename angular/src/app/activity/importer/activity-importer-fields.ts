import { ActivityModel } from 'src/app/activity/activity-model';

const { fields } = ActivityModel;

export default [
  fields.comment,
  fields.images,
  fields.audio,
  fields.documents,
  fields.video,
  fields.position,
];
