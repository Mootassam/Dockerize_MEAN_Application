import { Injectable } from '@angular/core';
import { MemberApi } from 'src/app/member/member.api';
import { ErrorService } from 'src/app/shared/error/error.service';
import { TestimonyApi } from "src/app/testimony/testimony.api"
import * as _  from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  loadingw = false ; 
  record = null ; 
  notifications  : any ;

  count = 0; 
  numberw = 0; 
  numberc = 0; 
  recordr = null; 

  loadingc = false ; 
  recordc = null ; 
  constructor(private errorService : ErrorService) { }
  async Waitting() {
    try {

      this.loadingw = true; 
      this.record = await MemberApi.Notificationswatting();
      this.record.forEach(element => {
          this.notifications = element.notifications
      });
      this.count = this.notifications.length ; 
      var count = _.filter(this.notifications,['read',false])
      this.numberw = count.length ;  
      this.loadingw = false;
    } catch (error) {
      this.errorService.handle(error);
      this.loadingw = false;
    }
  }




  async AsRead(id) {
    try {
   const read = await TestimonyApi._asRead(id); 
        } catch (error) {
    this.errorService.handle(error);
    }
  }

  async ReadAll() {
    try {
   const read = await TestimonyApi._ReadALl(); 
        } catch (error) {
    this.errorService.handle(error);
    }
  }

  async DeleteAll() {
    try {
   const read = await TestimonyApi._DeleteALl(); 
        } catch (error) {
    this.errorService.handle(error);
    }
  }

}
