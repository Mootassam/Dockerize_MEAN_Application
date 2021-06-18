import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  ActivityRoutingModule,
  routedComponents,
} from 'src/app/activity/activity-routing.module';
import { ActivityListFilterComponent } from 'src/app/activity/list/filter/activity-list-filter.component';
import { ActivityListTableComponent } from 'src/app/activity/list/table/activity-list-table.component';
import { ActivityListToolbarComponent } from 'src/app/activity/list/toolbar/activity-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ActivityViewToolbarComponent } from 'src/app/activity/view/activity-view-toolbar.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { ActivityImporterService } from 'src/app/activity/importer/activity-importer.service';
import { AppFormAutocompleteModule } from 'src/app/app-form-autocomplete.module';

@NgModule({
  declarations: [
    ...routedComponents,
    ActivityListFilterComponent,
    ActivityListTableComponent,
    ActivityListToolbarComponent,
    ActivityViewToolbarComponent,
  ],
  imports: [
    SharedModule,
    ActivityRoutingModule,
    LayoutModule,
    AppFormAutocompleteModule,
  ],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: ActivityImporterService,
    },
  ],
})
export class ActivityModule {}
