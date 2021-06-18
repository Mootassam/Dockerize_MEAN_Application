import { ActivityModel } from 'src/app/activity/activity-model';

const { fields } = ActivityModel;

export default [
  fields.id,
  fields.comment,
  fields.images,
  fields.audio,
  fields.documents,
  fields.video,
  fields.position,
  fields.createdAt,
  fields.updatedAt,
];
