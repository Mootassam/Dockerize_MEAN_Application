import { Injectable } from '@angular/core';
import { TestimonyCategoryApi } from 'src/app/testimony-category/testimony-category.api';
import testimonyCategoryImporterFields from 'src/app/testimony-category/importer/testimony-category-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class TestimonyCategoryImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      TestimonyCategoryApi.import,
      testimonyCategoryImporterFields,
      i18n('entities.testimonyCategory.importer.fileName'),
      i18n('entities.testimonyCategory.importer.hint'),
    );
  }
}
