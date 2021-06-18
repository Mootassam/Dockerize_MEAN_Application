import { InformationsModel } from 'src/app/informations/informations-model';

const { fields } = InformationsModel;

export default [
  fields.id,
  fields.category,
  fields.titleFR,
  fields.titreEN,
  fields.titreAR,
  fields.descriptionFR,
  fields.descriptionEN,
  fields.descriptionAR,
  fields.images,
  fields.document,
  fields.videos,
  fields.addressFR,
  fields.addressAR,
  fields.addressEN,
  
  fields.type,
  fields.publish,
  fields.num_Tel,
  fields.site_web,
  fields.email,
  fields.googleMapsPosition,
  fields.tags,
  fields.createdAt,
  fields.updatedAt,
];
