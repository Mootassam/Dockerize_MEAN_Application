import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberComponent  } from "./member.component";
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { AuthGuard } from 'src/app/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: MemberComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class MemberRoutingModule { }
export const routedComponents = [MemberComponent];
