import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Permissions } from 'src/security/permissions';

@Injectable({
  providedIn: 'root',
})
export class PartnerCategoryService {
  constructor(private authService: AuthService) {}

  get lockedForCurrentPlan() {
    return this.authService.lockedForCurrentPlan(
      Permissions.values.partnerCategoryRead,
    );
  }

  get hasPermissionToRead() {
    return this.authService.hasPermission(
      Permissions.values.partnerCategoryRead,
    );
  }

  get hasPermissionToDestroy() {
    return this.authService.hasPermission(
      Permissions.values.partnerCategoryDestroy,
    );
  }

  get hasPermissionToEdit() {
    return this.authService.hasPermission(
      Permissions.values.partnerCategoryEdit,
    );
  }

  get hasPermissionToCreate() {
    return this.authService.hasPermission(
      Permissions.values.partnerCategoryCreate,
    );
  }

  get hasPermissionToImport() {
    return this.authService.hasPermission(
      Permissions.values.partnerCategoryImport,
    );
  }
}
