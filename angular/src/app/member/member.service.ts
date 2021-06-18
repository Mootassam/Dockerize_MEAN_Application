import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { MemberApi } from "src/app/member/member.api";
import { ErrorService } from 'src/app/shared/error/error.service';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { Permissions } from 'src/security/permissions';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
record = null;
loading = false; 
loadingw = false ; 
loadingo = false ; 
loadingc = false ; 
loadingca = false ; 
count =0 ; 
counto =0 ;
countc =0; 




constructor(
  private errorService: ErrorService,
  private authService : AuthService
  
){}

get hasPermissionToRead() {
  return this.authService.hasPermission(
    Permissions.values.DashboardMemberRead,
  );
}




async Open() {
  try {
    this.loadingo = true; 
    this.record = await MemberApi.Open(); 
    this.counto = this.record.length
    this.loadingo = false;
  } catch (error) {
    this.errorService.handle(error);
    this.loadingo = false;
  }
}

async Closed() {
  try {    
    this.loadingc = true; 
    this.record = await MemberApi.closed();   
    this.countc=this.record.length; 
    this.loadingc = false;
  } catch (error) {
    this.errorService.handle(error);
    this.loadingc = false;
  }
}

async Waitting() {
  try {
    this.loadingw = true; 
    this.record = await MemberApi.watting(); 
    this.count = this.record.length; 
    this.loadingw = false;
  } catch (error) {
    this.errorService.handle(error);
    this.loadingw = false;
  }
}

}
