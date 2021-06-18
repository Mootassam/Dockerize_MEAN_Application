import { Injectable } from '@angular/core';
import { PartnerCategoryApi } from 'src/app/partner-category/partner-category.api';
import partnerCategoryImporterFields from 'src/app/partner-category/importer/partner-category-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class PartnerCategoryImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      PartnerCategoryApi.import,
      partnerCategoryImporterFields,
      i18n('entities.partnerCategory.importer.fileName'),
      i18n('entities.partnerCategory.importer.hint'),
    );
  }
}
