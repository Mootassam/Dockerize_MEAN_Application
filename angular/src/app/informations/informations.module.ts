import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  InformationsRoutingModule,
  routedComponents,
} from 'src/app/informations/informations-routing.module';
import { InformationsListFilterComponent } from 'src/app/informations/list/filter/informations-list-filter.component';
import { InformationsListTableComponent } from 'src/app/informations/list/table/informations-list-table.component';
import { InformationsListToolbarComponent } from 'src/app/informations/list/toolbar/informations-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InformationsViewToolbarComponent } from 'src/app/informations/view/informations-view-toolbar.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { InformationsImporterService } from 'src/app/informations/importer/informations-importer.service';
import { AppFormAutocompleteModule } from 'src/app/app-form-autocomplete.module';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    ...routedComponents,
    InformationsListFilterComponent,
    InformationsListTableComponent,
    InformationsListToolbarComponent,
    InformationsViewToolbarComponent,
  ],
  imports: [
    SharedModule,
    InformationsRoutingModule,
    LayoutModule,
    AppFormAutocompleteModule,
    YouTubePlayerModule,
    AgmCoreModule.forRoot({ 
      apiKey : 'AIzaSyA5mS2M8ZIH9jdEtrjvKKUkkOR5argUl2M'
    })
  ],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: InformationsImporterService,
    },
  ],
})
export class InformationsModule {}
