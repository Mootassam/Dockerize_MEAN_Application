import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { Permissions } from 'src/security/permissions';
import { PartnerListComponent } from 'src/app/partner/list/partner-list.component';
import { PartnerViewComponent } from 'src/app/partner/view/partner-view.component';
import { PartnerImporterComponent } from 'src/app/partner/importer/partner-importer.component';
import { PartnerFormPageComponent } from 'src/app/partner/form/partner-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: PartnerFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.partnerEdit,
        },
      },
      {
        path: 'new',
        component: PartnerFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.partnerCreate,
        },
      },
      {
        path: 'import',
        component: PartnerImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.partnerImport,
        },
      },
      {
        path: ':id',
        component: PartnerViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.partnerRead,
        },
      },
      {
        path: '',
        component: PartnerListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.partnerRead,
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
export class PartnerRoutingModule {}

export const routedComponents = [
  PartnerListComponent,
  PartnerFormPageComponent,
  PartnerViewComponent,
  PartnerImporterComponent,
];
