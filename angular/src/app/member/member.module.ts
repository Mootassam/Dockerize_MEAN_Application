import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberComponent } from './member.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutModule } from 'src/app/layout/layout.module';
import { MemberRoutingModule, routedComponents } from "./member-routing.module";
import { MemberChartComponent } from "./charts/member-chart.component";
import { ClosedComponent } from './closed/closed.component';
import { OpenComponent } from './open/open.component';
import { WaittingComponent } from './waitting/waitting.component';

@NgModule({
 
  imports: [
    SharedModule,
    LayoutModule,
    MemberRoutingModule,
    
    ], 
  declarations: [MemberChartComponent,...routedComponents,ClosedComponent, OpenComponent, WaittingComponent],
  providers: [],
  
})
export class MemberModule { }
