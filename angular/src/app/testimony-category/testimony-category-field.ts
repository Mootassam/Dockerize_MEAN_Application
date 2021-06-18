import RelationToOneField from 'src/app/shared/fields/relation-to-one-field';
import { TestimonyCategoryApi } from 'src/app/testimony-category/testimony-category.api';
import { Permissions } from 'src/security/permissions';
import RelationToManyField from 'src/app/shared/fields/relation-to-many-field';
import { getLanguage } from 'src/i18n';

export class TestimonyCategoryField {
  static relationToOne(name, label, options?) {
    let lang = getLanguage();
    return new RelationToOneField(
      name,
      label,
      '/testimony-category',
      Permissions.values.testimonyCategoryRead,
      TestimonyCategoryApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }
        if(lang.id == "es"){
          return {
            id: record.id,
            label: record.titleFR,
          };
        }

        if(lang.id == "en"){
          return {
            id: record.id,
            label: record.titleEN,
          };
        }

        else{
          return {
            id: record.id,
            label: record.titleEN,
          };
        }
      },
      options,
    );
  }

  static relationToMany(name, label, options?) {
    return new RelationToManyField(
      name,
      label,
      '/testimony-category',
      Permissions.values.testimonyCategoryRead,
      TestimonyCategoryApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.titleFR,
        };
      },
      options,
    );
  }
}
