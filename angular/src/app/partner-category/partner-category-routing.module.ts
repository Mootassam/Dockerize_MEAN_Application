import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { Permissions } from 'src/security/permissions';
import { PartnerCategoryListComponent } from 'src/app/partner-category/list/partner-category-list.component';
import { PartnerCategoryViewComponent } from 'src/app/partner-category/view/partner-category-view.component';
import { PartnerCategoryImporterComponent } from 'src/app/partner-category/importer/partner-category-importer.component';
import { PartnerCategoryFormPageComponent } from 'src/app/partner-category/form/partner-category-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: PartnerCategoryFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.partnerCategoryEdit,
        },
      },
      {
        path: 'new',
        component: PartnerCategoryFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.partnerCategoryCreate,
        },
      },
      {
        path: 'import',
        component: PartnerCategoryImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.partnerCategoryImport,
        },
      },
      {
        path: ':id',
        component: PartnerCategoryViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.partnerCategoryRead,
        },
      },
      {
        path: '',
        component: PartnerCategoryListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.partnerCategoryRead,
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
export class PartnerCategoryRoutingModule {}

export const routedComponents = [
  PartnerCategoryListComponent,
  PartnerCategoryFormPageComponent,
  PartnerCategoryViewComponent,
  PartnerCategoryImporterComponent,
];
