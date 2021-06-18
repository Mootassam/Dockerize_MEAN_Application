import { Injectable } from '@angular/core';
import { TagsApi } from 'src/app/tags/tags.api';
import tagsImporterFields from 'src/app/tags/importer/tags-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class TagsImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      TagsApi.import,
      tagsImporterFields,
      i18n('entities.tags.importer.fileName'),
      i18n('entities.tags.importer.hint'),
    );
  }
}
