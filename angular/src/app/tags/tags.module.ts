import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  TagsRoutingModule,
  routedComponents,
} from 'src/app/tags/tags-routing.module';
import { TagsListFilterComponent } from 'src/app/tags/list/filter/tags-list-filter.component';
import { TagsListTableComponent } from 'src/app/tags/list/table/tags-list-table.component';
import { TagsListToolbarComponent } from 'src/app/tags/list/toolbar/tags-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TagsViewToolbarComponent } from 'src/app/tags/view/tags-view-toolbar.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { TagsImporterService } from 'src/app/tags/importer/tags-importer.service';
import { AppFormAutocompleteModule } from 'src/app/app-form-autocomplete.module';

@NgModule({
  declarations: [
    ...routedComponents,
    TagsListFilterComponent,
    TagsListTableComponent,
    TagsListToolbarComponent,
    TagsViewToolbarComponent,
  ],
  imports: [
    SharedModule,
    TagsRoutingModule,
    LayoutModule,
    AppFormAutocompleteModule,
  ],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: TagsImporterService,
    },
  ],
})
export class TagsModule {}
