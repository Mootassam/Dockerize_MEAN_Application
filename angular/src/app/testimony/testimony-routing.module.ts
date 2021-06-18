import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { Permissions } from 'src/security/permissions';
import { TestimonyListComponent } from 'src/app/testimony/list/testimony-list.component';
import { TestimonyViewComponent } from 'src/app/testimony/view/testimony-view.component';
import { TestimonyImporterComponent } from 'src/app/testimony/importer/testimony-importer.component';
import { TestimonyFormPageComponent } from 'src/app/testimony/form/testimony-form-page.component';
import { ActivityListTableComponent } from 'src/app/activity/list/table/activity-list-table.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: TestimonyFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.testimonyEdit,
        },
      },
      {
        path: 'new',
        component: TestimonyFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.testimonyCreate,
        },
      },
      {
        path: 'import',
        component: TestimonyImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.testimonyImport,
        },
      },
      {
        path: ':id',
        component: TestimonyViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.testimonyRead,
        },
      },
      {
        path: '',
        component: TestimonyListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.testimonyRead,
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
export class TestimonyRoutingModule {}

export const routedComponents = [
  TestimonyListComponent,
  TestimonyFormPageComponent,
  TestimonyViewComponent,
  TestimonyImporterComponent,
];
