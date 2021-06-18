import { Injectable } from '@angular/core';
import { PartnerApi } from 'src/app/partner/partner.api';
import partnerImporterFields from 'src/app/partner/importer/partner-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class PartnerImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      PartnerApi.import,
      partnerImporterFields,
      i18n('entities.partner.importer.fileName'),
      i18n('entities.partner.importer.hint'),
    );
  }
}
