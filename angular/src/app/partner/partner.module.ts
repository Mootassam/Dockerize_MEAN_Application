import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  PartnerRoutingModule,
  routedComponents,
} from 'src/app/partner/partner-routing.module';
import { PartnerListFilterComponent } from 'src/app/partner/list/filter/partner-list-filter.component';
import { PartnerListTableComponent } from 'src/app/partner/list/table/partner-list-table.component';
import { PartnerListToolbarComponent } from 'src/app/partner/list/toolbar/partner-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PartnerViewToolbarComponent } from 'src/app/partner/view/partner-view-toolbar.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { PartnerImporterService } from 'src/app/partner/importer/partner-importer.service';
import { AppFormAutocompleteModule } from 'src/app/app-form-autocomplete.module';

@NgModule({
  declarations: [
    ...routedComponents,
    PartnerListFilterComponent,
    PartnerListTableComponent,
    PartnerListToolbarComponent,
    PartnerViewToolbarComponent,
  ],
  imports: [
    SharedModule,
    PartnerRoutingModule,
    LayoutModule,
    AppFormAutocompleteModule,
  ],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: PartnerImporterService,
    },
  ],
})
export class PartnerModule {}
