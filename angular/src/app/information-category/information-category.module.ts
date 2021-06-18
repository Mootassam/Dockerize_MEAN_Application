import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  InformationCategoryRoutingModule,
  routedComponents,
} from 'src/app/information-category/information-category-routing.module';
import { InformationCategoryListFilterComponent } from 'src/app/information-category/list/filter/information-category-list-filter.component';
import { InformationCategoryListTableComponent } from 'src/app/information-category/list/table/information-category-list-table.component';
import { InformationCategoryListToolbarComponent } from 'src/app/information-category/list/toolbar/information-category-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InformationCategoryViewToolbarComponent } from 'src/app/information-category/view/information-category-view-toolbar.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { InformationCategoryImporterService } from 'src/app/information-category/importer/information-category-importer.service';
import { AppFormAutocompleteModule } from 'src/app/app-form-autocomplete.module';

@NgModule({
  declarations: [
    ...routedComponents,
    InformationCategoryListFilterComponent,
    InformationCategoryListTableComponent,
    InformationCategoryListToolbarComponent,
    InformationCategoryViewToolbarComponent,
  ],
  imports: [
    SharedModule,
    InformationCategoryRoutingModule,
    LayoutModule,
    AppFormAutocompleteModule,
  ],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: InformationCategoryImporterService,
    },
  ],
})
export class InformationCategoryModule {}
