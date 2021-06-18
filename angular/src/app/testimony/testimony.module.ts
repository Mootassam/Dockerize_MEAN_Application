import { NgModule } from '@angular/core';
import { LayoutModule } from '../../app/layout/layout.module';
import {
  TestimonyRoutingModule,
  routedComponents,
} from '../../app/testimony/testimony-routing.module';
import { TestimonyListFilterComponent } from '../../app/testimony/list/filter/testimony-list-filter.component';
import { TestimonyListTableComponent } from '../../app/testimony/list/table/testimony-list-table.component';
import { TestimonyListToolbarComponent } from '../../app/testimony/list/toolbar/testimony-list-toolbar.component';
import { SharedModule } from '../../app/shared/shared.module';
import { TestimonyViewToolbarComponent } from '../../app/testimony/view/testimony-view-toolbar.component';
import { ImporterService } from '../../app/shared/importer/importer.service';
import { TestimonyImporterService } from '../../app/testimony/importer/testimony-importer.service';
import { AppFormAutocompleteModule } from '../../app/app-form-autocomplete.module';

@NgModule({
  declarations: [
    ...routedComponents,
    TestimonyListFilterComponent,
    TestimonyListTableComponent,
    TestimonyListToolbarComponent,
    TestimonyViewToolbarComponent,

  ],
  imports: [
    SharedModule,
    TestimonyRoutingModule,
    LayoutModule,
    AppFormAutocompleteModule,
  ],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: TestimonyImporterService,
    },
  ],
})
export class TestimonyModule {}
