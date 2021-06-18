import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { Permissions } from 'src/security/permissions';
import { TagsListComponent } from 'src/app/tags/list/tags-list.component';
import { TagsViewComponent } from 'src/app/tags/view/tags-view.component';
import { TagsImporterComponent } from 'src/app/tags/importer/tags-importer.component';
import { TagsFormPageComponent } from 'src/app/tags/form/tags-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: TagsFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.tagsEdit,
        },
      },
      {
        path: 'new',
        component: TagsFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.tagsCreate,
        },
      },
      {
        path: 'import',
        component: TagsImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.tagsImport,
        },
      },
      {
        path: ':id',
        component: TagsViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.tagsRead,
        },
      },
      {
        path: '',
        component: TagsListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.tagsRead,
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
export class TagsRoutingModule {}

export const routedComponents = [
  TagsListComponent,
  TagsFormPageComponent,
  TagsViewComponent,
  TagsImporterComponent,
];
