import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Permissions } from 'src/security/permissions';
import { AuthService } from "src/app/auth/auth.service";
import { PermissionChecker } from 'src/app/auth/permission-checker';
import { DashbordComponentApi } from "src/app/dashboard/dashbord-component.api";
import { ErrorService } from "src/app/shared/error/error.service";
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

   constructor(
private authService : AuthService

  ) {}

  get hasPermissionToRead() {
    return this.authService.hasPermission(
      Permissions.values.dashboardRead,
    );
  }

  






  






}