import RelationToOneField from 'src/app/shared/fields/relation-to-one-field';
import { ActivityApi } from 'src/app/activity/activity.api';
import { Permissions } from 'src/security/permissions';
import RelationToManyField from 'src/app/shared/fields/relation-to-many-field';

export class ActivityField {
  static relationToOne(name, label, options?) {
    return new RelationToOneField(
      name,
      label,
      '/activity',
      Permissions.values.activityRead,
      ActivityApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.id,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options?) {
    return new RelationToManyField(
      name,
      label,
      '/activity',
      Permissions.values.activityRead,
      ActivityApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.comment,
        };
      },
      options,
    );
  }
}
