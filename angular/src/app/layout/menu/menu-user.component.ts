import { Component, OnInit } from '@angular/core';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { AuthService } from 'src/app/auth/auth.service';
import { SettingsService } from 'src/app/settings/settings.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-menu-user',
  templateUrl: './menu-user.component.html',
})
export class MenuUserComponent implements OnInit {
  constructor(
    private authService: AuthService,
    public auditLogService: AuditLogService,
    public settingsService: SettingsService,) {}

  ngOnInit(): void {

  }

  get currentUserNameOrEmailPrefix() {
    return this.authService.currentUserNameOrEmailPrefix;
  }

  get currentUserAvatar() {
    return this.authService.currentUserAvatar;
  }

  get currentTenantName() {
    return (
      this.authService.currentTenant &&
      this.authService.currentTenant.name
    );
  }

  get tenantMode() {
    return environment.tenantMode;
  }

  doSignout() {
    return this.authService.doSignout();
  }
}
