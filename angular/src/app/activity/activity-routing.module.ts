import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { Permissions } from 'src/security/permissions';
import { ActivityListComponent } from 'src/app/activity/list/activity-list.component';
import { ActivityViewComponent } from 'src/app/activity/view/activity-view.component';
import { ActivityImporterComponent } from 'src/app/activity/importer/activity-importer.component';
import { ActivityFormPageComponent } from 'src/app/activity/form/activity-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: ActivityFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.activityEdit,
        },
      },
      {
        path: 'new',
        component: ActivityFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.activityCreate,
        },
      },
      {
        path: 'import',
        component: ActivityImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.activityImport,
        },
      },
      {
        path: ':id',
        component: ActivityViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.activityRead,
        },
      },
      {
        path: '',
        component: ActivityListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.activityRead,
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
export class ActivityRoutingModule {}

export const routedComponents = [
  ActivityListComponent,
  ActivityFormPageComponent,
  ActivityViewComponent,
  ActivityImporterComponent,
];
