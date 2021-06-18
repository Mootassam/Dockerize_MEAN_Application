import { TagsModel } from 'src/app/tags/tags-model';

const { fields } = TagsModel;

export default [
  fields.id,
  fields.titleFR,
  fields.titleEN,
  fields.titleAR,
  fields.createdAt,
  fields.updatedAt,
];
