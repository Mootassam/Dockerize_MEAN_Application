import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from 'src/app/layout/errors/error-404.component';
import { Error403Component } from 'src/app/layout/errors/error-403.component';
import { Error500Component } from 'src/app/layout/errors/error-500.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(
        (m) => m.DashboardModule,
      ),
  },
  {
    path: 'member',
    loadChildren: () =>
      import('./member/member.module').then(
        (m) => m.MemberModule,
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then(
        (m) => m.AuthModule,
      ),
  },
  {
    path: 'tenant',
    loadChildren: () =>
      import('./tenant/tenant.module').then(
        (m) => m.TenantModule,
      ),
  },
  {
    path: 'plan',
    loadChildren: () =>
      import('./plan/plan.module').then(
        (m) => m.PlanModule,
      ),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./user/user.module').then(
        (m) => m.UserModule,
      ),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./settings/settings.module').then(
        (m) => m.SettingsModule,
      ),
  },
  {
    path: 'audit-log',
    loadChildren: () =>
      import('./audit-log/audit-log.module').then(
        (m) => m.AuditLogModule,
      ),
  },
  {
    path: 'information-category',
    loadChildren: () => import('./information-category/information-category.module').then(m => m.InformationCategoryModule),
  },
  {
    path: 'informations',
    loadChildren: () => import('./informations/informations.module').then(m => m.InformationsModule),
  },
  {
    path: 'testimony-category',
    loadChildren: () => import('./testimony-category/testimony-category.module').then(m => m.TestimonyCategoryModule),
  },
  {
    path: 'activity',
    loadChildren: () => import('./activity/activity.module').then(m => m.ActivityModule),
  },
  {
    path: 'testimony',
    loadChildren: () => import('./testimony/testimony.module').then(m => m.TestimonyModule),
  },
  {
    path: 'tags',
    loadChildren: () => import('./tags/tags.module').then(m => m.TagsModule),
  },
  {
    path: 'partner',
    loadChildren: () => import('./partner/partner.module').then(m => m.PartnerModule),
  },
  {
    path: 'partner-category',
    loadChildren: () => import('./partner-category/partner-category.module').then(m => m.PartnerCategoryModule),
  },
  { path: '403', component: Error403Component },
  { path: '500', component: Error500Component },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routedComponents = [
  Error404Component,
  Error403Component,
  Error500Component,
];
