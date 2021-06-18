import { NgModule } from '@angular/core';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { MenuModule } from 'src/app/layout/menu/menu.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NotificationsComponent } from "src/app/notifications/notifications.component";
@NgModule({
  declarations: [LayoutComponent,NotificationsComponent],
  imports: [SharedModule, MenuModule],
  exports: [LayoutComponent],
  providers: [],
})
export class LayoutModule {}
