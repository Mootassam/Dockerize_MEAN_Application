import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { Permissions } from 'src/security/permissions';
import { InformationsListComponent } from 'src/app/informations/list/informations-list.component';
import { InformationsViewComponent } from 'src/app/informations/view/informations-view.component';
import { InformationsImporterComponent } from 'src/app/informations/importer/informations-importer.component';
import { InformationsFormPageComponent } from 'src/app/informations/form/informations-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: InformationsFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.informationsEdit,
        },
      },
      {
        path: 'new',
        component: InformationsFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.informationsCreate,
        },
      },
      {
        path: 'import',
        component: InformationsImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.informationsImport,
        },
      },
      {
        path: ':id',
        component: InformationsViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.informationsRead,
        },
      },
      {
        path: '',
        component: InformationsListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.informationsRead,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class InformationsRoutingModule {}

export const routedComponents = [
  InformationsListComponent,
  InformationsFormPageComponent,
  InformationsViewComponent,
  InformationsImporterComponent,
];
