import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { Permissions } from 'src/security/permissions';
import { InformationCategoryListComponent } from 'src/app/information-category/list/information-category-list.component';
import { InformationCategoryViewComponent } from 'src/app/information-category/view/information-category-view.component';
import { InformationCategoryImporterComponent } from 'src/app/information-category/importer/information-category-importer.component';
import { InformationCategoryFormPageComponent } from 'src/app/information-category/form/information-category-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: InformationCategoryFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.informationCategoryEdit,
        },
      },
      {
        path: 'new',
        component: InformationCategoryFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.informationCategoryCreate,
        },
      },
      {
        path: 'import',
        component: InformationCategoryImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.informationCategoryImport,
        },
      },
      {
        path: ':id',
        component: InformationCategoryViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.informationCategoryRead,
        },
      },
      {
        path: '',
        component: InformationCategoryListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.informationCategoryRead,
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
export class InformationCategoryRoutingModule {}

export const routedComponents = [
  InformationCategoryListComponent,
  InformationCategoryFormPageComponent,
  InformationCategoryViewComponent,
  InformationCategoryImporterComponent,
];
