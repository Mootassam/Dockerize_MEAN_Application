import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material.module';
import { AlertComponent } from 'src/app/shared/alert/alert.component';
import { AlertService } from 'src/app/shared/alert/alert.service';
import { I18nModule } from 'src/app/shared/i18n/i18n.module';

@NgModule({
  declarations: [AlertComponent],
  imports: [CommonModule, MaterialModule, I18nModule],
  exports: [],
  providers: [AlertService],
  entryComponents: [AlertComponent],
})
export class AlertModule {}
