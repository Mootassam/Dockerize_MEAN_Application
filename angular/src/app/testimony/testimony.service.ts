import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Permissions } from 'src/security/permissions';

@Injectable({
  providedIn: 'root',
})
export class TestimonyService {
  constructor(private authService: AuthService) {}

  get lockedForCurrentPlan() {
    return this.authService.lockedForCurrentPlan(
      Permissions.values.testimonyRead,
    );
  }

  get hasPermissionToRead() {
    return this.authService.hasPermission(
      Permissions.values.testimonyRead,
    );
  }

  get hasPermissionToDestroy() {
    return this.authService.hasPermission(
      Permissions.values.testimonyDestroy,
    );
  }

  get hasPermissionToEdit() {
    return this.authService.hasPermission(
      Permissions.values.testimonyEdit,
    );
  }

  get hasPermissionToCreate() {
    return this.authService.hasPermission(
      Permissions.values.testimonyCreate,
    );
  }

  get hasPermissionToImport() {
    return this.authService.hasPermission(
      Permissions.values.testimonyImport,
    );
  }

  // Salma : has permission to assign
  get hasPermissionToAssignTestimonyToUser() {
    return this.authService.hasPermission(
      Permissions.values.hasPermissionToAssignTestimonyToUser,
    );
  }
}
