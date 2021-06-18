import RelationToOneField from 'src/app/shared/fields/relation-to-one-field';
import { PartnerCategoryApi } from 'src/app/partner-category/partner-category.api';
import { Permissions } from 'src/security/permissions';
import RelationToManyField from 'src/app/shared/fields/relation-to-many-field';

export class PartnerCategoryField {
  static relationToOne(name, label, options?) {
    return new RelationToOneField(
      name,
      label,
      '/partner-category',
      Permissions.values.partnerCategoryRead,
      PartnerCategoryApi.listAutocomplete,
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
      '/partner-category',
      Permissions.values.partnerCategoryRead,
      PartnerCategoryApi.listAutocomplete,
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
