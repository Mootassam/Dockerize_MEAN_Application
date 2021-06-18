import RelationToOneField from 'src/app/shared/fields/relation-to-one-field';
import { InformationsApi } from 'src/app/informations/informations.api';
import { Permissions } from 'src/security/permissions';
import RelationToManyField from 'src/app/shared/fields/relation-to-many-field';

export class InformationsField {
  static relationToOne(name, label, options?) {
    return new RelationToOneField(
      name,
      label,
      '/informations',
      Permissions.values.informationsRead,
      InformationsApi.listAutocomplete,
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
    return new RelationToManyField(
      name,
      label,
      '/informations',
      Permissions.values.informationsRead,
      InformationsApi.listAutocomplete,
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
