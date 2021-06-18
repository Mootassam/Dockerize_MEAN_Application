import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  TestimonyCategoryRoutingModule,
  routedComponents,
} from 'src/app/testimony-category/testimony-category-routing.module';
import { TestimonyCategoryListFilterComponent } from 'src/app/testimony-category/list/filter/testimony-category-list-filter.component';
import { TestimonyCategoryListTableComponent } from 'src/app/testimony-category/list/table/testimony-category-list-table.component';
import { TestimonyCategoryListToolbarComponent } from 'src/app/testimony-category/list/toolbar/testimony-category-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TestimonyCategoryViewToolbarComponent } from 'src/app/testimony-category/view/testimony-category-view-toolbar.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { TestimonyCategoryImporterService } from 'src/app/testimony-category/importer/testimony-category-importer.service';
import { AppFormAutocompleteModule } from 'src/app/app-form-autocomplete.module';

@NgModule({
  declarations: [
    ...routedComponents,
    TestimonyCategoryListFilterComponent,
    TestimonyCategoryListTableComponent,
    TestimonyCategoryListToolbarComponent,
    TestimonyCategoryViewToolbarComponent,
  ],
  imports: [
    SharedModule,
    TestimonyCategoryRoutingModule,
    LayoutModule,
    AppFormAutocompleteModule,
  ],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: TestimonyCategoryImporterService,
    },
  ],
})
export class TestimonyCategoryModule {}
