import RelationToOneField from '../../app/shared/fields/relation-to-one-field';
import { TestimonyApi } from '../../app/testimony/testimony.api';
import { Permissions } from '../../security/permissions';
import RelationToManyField from '../../app/shared/fields/relation-to-many-field';

export class TestimonyField {
  static relationToOne(name, label, options?) {
    return new RelationToOneField(
      name,
      label,
      '/testimony',
      Permissions.values.testimonyRead,
      TestimonyApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.title,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options?) {
    return new RelationToManyField(
      name,
      label,
      '/testimony',
      Permissions.values.testimonyRead,
      TestimonyApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.title,
        };
      },
      options,
    );
  }
}
