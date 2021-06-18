import { Injectable } from '@angular/core';
import { InformationsApi } from 'src/app/informations/informations.api';
import informationsImporterFields from 'src/app/informations/importer/informations-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class InformationsImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      InformationsApi.import,
      informationsImporterFields,
      i18n('entities.informations.importer.fileName'),
      i18n('entities.informations.importer.hint'),
    );
  }
}
