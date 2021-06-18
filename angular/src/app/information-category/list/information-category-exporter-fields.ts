import { InformationCategoryModel } from 'src/app/information-category/information-category-model';

const { fields } = InformationCategoryModel;

export default [
  fields.id,
  fields.titleFR,
  fields.titleEN,
  fields.titleAR,
  fields.descriptionFR,
  fields.descriptionEN,
  fields.descriptionAR,
  fields.createdAt,
  fields.updatedAt,
];
