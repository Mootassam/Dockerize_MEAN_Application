import { Injectable } from '@angular/core';
import { ActivityApi } from 'src/app/activity/activity.api';
import activityImporterFields from 'src/app/activity/importer/activity-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class ActivityImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      ActivityApi.import,
      activityImporterFields,
      i18n('entities.activity.importer.fileName'),
      i18n('entities.activity.importer.hint'),
    );
  }
}
