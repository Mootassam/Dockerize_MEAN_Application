import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  PartnerCategoryRoutingModule,
  routedComponents,
} from 'src/app/partner-category/partner-category-routing.module';
import { PartnerCategoryListFilterComponent } from 'src/app/partner-category/list/filter/partner-category-list-filter.component';
import { PartnerCategoryListTableComponent } from 'src/app/partner-category/list/table/partner-category-list-table.component';
import { PartnerCategoryListToolbarComponent } from 'src/app/partner-category/list/toolbar/partner-category-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PartnerCategoryViewToolbarComponent } from 'src/app/partner-category/view/partner-category-view-toolbar.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { PartnerCategoryImporterService } from 'src/app/partner-category/importer/partner-category-importer.service';
import { AppFormAutocompleteModule } from 'src/app/app-form-autocomplete.module';

@NgModule({
  declarations: [
    ...routedComponents,
    PartnerCategoryListFilterComponent,
    PartnerCategoryListTableComponent,
    PartnerCategoryListToolbarComponent,
    PartnerCategoryViewToolbarComponent,
  ],
  imports: [
    SharedModule,
    PartnerCategoryRoutingModule,
    LayoutModule,
    AppFormAutocompleteModule,
  ],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: PartnerCategoryImporterService,
    },
  ],
})
export class PartnerCategoryModule {}
