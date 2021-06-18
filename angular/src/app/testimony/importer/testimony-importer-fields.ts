import { TestimonyModel } from 'src/app/testimony/testimony-model';

const { fields } = TestimonyModel;

export default [
  fields.category,
  fields.title,
  fields.description,
  fields.region,
  fields.testimonyType,
  fields.status,
  fields.priority,
  fields.assignedTo,
  fields.images,
  fields.audio,
  fields.documents,
  fields.videos,
  fields.position,
  fields.anonymous,
  fields.activity,
  fields.tags,
  fields.transferTo,
];
