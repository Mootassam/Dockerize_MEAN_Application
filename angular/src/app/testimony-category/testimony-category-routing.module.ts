import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { Permissions } from 'src/security/permissions';
import { TestimonyCategoryListComponent } from 'src/app/testimony-category/list/testimony-category-list.component';
import { TestimonyCategoryViewComponent } from 'src/app/testimony-category/view/testimony-category-view.component';
import { TestimonyCategoryImporterComponent } from 'src/app/testimony-category/importer/testimony-category-importer.component';
import { TestimonyCategoryFormPageComponent } from 'src/app/testimony-category/form/testimony-category-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: TestimonyCategoryFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.testimonyCategoryEdit,
        },
      },
      {
        path: 'new',
        component: TestimonyCategoryFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.testimonyCategoryCreate,
        },
      },
      {
        path: 'import',
        component: TestimonyCategoryImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.testimonyCategoryImport,
        },
      },
      {
        path: ':id',
        component: TestimonyCategoryViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.testimonyCategoryRead,
        },
      },
      {
        path: '',
        component: TestimonyCategoryListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.testimonyCategoryRead,
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
export class TestimonyCategoryRoutingModule {}

export const routedComponents = [
  TestimonyCategoryListComponent,
  TestimonyCategoryFormPageComponent,
  TestimonyCategoryViewComponent,
  TestimonyCategoryImporterComponent,
];
