import { TestimonyModel } from 'src/app/testimony/testimony-model';

const { fields } = TestimonyModel;

export default [
  fields.id,
  fields.category,
  fields.title,
  fields.testimonyType,
  fields.description,
  fields.region,
  fields.status,
  fields.priority,
  fields.assignedTo, 
  fields.images,
  fields.documents,
  fields.videos,
  fields.position,
  fields.anonymous,
  fields.activity,
  fields.tags,
  fields.transferTo,
  fields.createdAt,
  fields.updatedAt,
];
