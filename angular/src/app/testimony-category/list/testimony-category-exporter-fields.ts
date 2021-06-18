import { TestimonyCategoryModel } from 'src/app/testimony-category/testimony-category-model';

const { fields } = TestimonyCategoryModel;

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
