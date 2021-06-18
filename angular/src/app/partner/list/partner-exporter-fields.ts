import { PartnerModel } from 'src/app/partner/partner-model';

const { fields } = PartnerModel;

export default [
  fields.id,
  fields.category,
  fields.title,
  fields.desription,
  fields.phone,
  fields.mobile,
  fields.address,
  fields.email,
  fields.createdAt,
  fields.updatedAt,
];
