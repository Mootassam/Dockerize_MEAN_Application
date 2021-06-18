import RelationToOneField from 'src/app/shared/fields/relation-to-one-field';
import { InformationCategoryApi } from 'src/app/information-category/information-category.api';
import { Permissions } from 'src/security/permissions';
import RelationToManyField from 'src/app/shared/fields/relation-to-many-field';
import { getLanguage } from 'src/i18n';

export class InformationCategoryField {
  static relationToOne(name, label, options?) {
    let lang = getLanguage();
    return new RelationToOneField(
      name,
      label,
      '/information-category',
      Permissions.values.informationCategoryRead,
      InformationCategoryApi.listAutocomplete,
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
      '/information-category',
      Permissions.values.informationCategoryRead,
      InformationCategoryApi.listAutocomplete,
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
