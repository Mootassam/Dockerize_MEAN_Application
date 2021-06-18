import RelationToOneField from 'src/app/shared/fields/relation-to-one-field';
import { TagsApi } from 'src/app/tags/tags.api';
import { Permissions } from 'src/security/permissions';
import RelationToManyField from 'src/app/shared/fields/relation-to-many-field';
import { getLanguage } from 'src/i18n';

export class TagsField {
  static relationToOne(name, label, options?) {
    return new RelationToOneField(
      name,
      label,
      '/tags',
      Permissions.values.tagsRead,
      TagsApi.listAutocomplete,
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

  static relationToMany(name, label, options?) {
    let lang = getLanguage();
    return new RelationToManyField(
      name,
      label,
      '/tags',
      Permissions.values.tagsRead,
      TagsApi.listAutocomplete,
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
}
