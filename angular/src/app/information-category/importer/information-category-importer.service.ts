import { Injectable } from '@angular/core';
import { InformationCategoryApi } from 'src/app/information-category/information-category.api';
import informationCategoryImporterFields from 'src/app/information-category/importer/information-category-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class InformationCategoryImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      InformationCategoryApi.import,
      informationCategoryImporterFields,
      i18n('entities.informationCategory.importer.fileName'),
      i18n('entities.informationCategory.importer.hint'),
    );
  }
}
