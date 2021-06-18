import { Injectable } from '@angular/core';
import { TestimonyApi } from 'src/app/testimony/testimony.api';
import testimonyImporterFields from 'src/app/testimony/importer/testimony-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class TestimonyImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      TestimonyApi.import,
      testimonyImporterFields,
      i18n('entities.testimony.importer.fileName'),
      i18n('entities.testimony.importer.hint'),
    );
  }
}
