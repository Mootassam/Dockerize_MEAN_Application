import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/member/member.service';
import { i18n } from 'src/i18n';
import * as io from 'socket.io-client'; 
import { TestimonyFormPageService } from "src/app/testimony/form/testimony-form-page.service";
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { Router } from '@angular/router';
import * as moment from 'moment'
import {environment} from 'src/environments/environment.localhost'

@Component({
  selector: 'app-waitting',
  templateUrl: './waitting.component.html',
  styleUrls: ['./waitting.component.css'],
})
export class WaittingComponent implements OnInit {
  socket : any
  show = false ;
  num :any ;  
  data : any ; 

  medium = i18n('dashboard.priority.medium') ;
  dang = i18n('dashboard.priority.hight') ;
  low = i18n('dashboard.priority.low') ;

  add = i18n('dashboard.assign.save');
  cancel =i18n('dashboard.assign.cancel') ;


  constructor( private service : MemberService,
     private testimonyService : TestimonyFormPageService,
     private snackbar: Snackbar, private router : Router ) {
       this.socket = io(environment.urlsocket); 
         }
  ngOnInit() :void {
    this.service.Waitting();    
    this.socket.on('refreshPage', data => { 
   this.service.Waitting(); 
       });

    }
  get loading(){ 
    return this.service.loading ; 
  }
  get record(){ 
  return  this.service.record  ; 
  }
  get count(){ 
    return this.service.count; 
  }



 async shows(item){ 
 this.data = item ; 
this.show = !this.show
 }
 save(){ 
  this.testimonyService.Update(this.data); 

  this.socket.emit('refresh',{});
  this.show = !this.show
 }
 reset(){ 
  this.show = !this.show 
 }
 view(){ 
  this.router.navigate(['/testimony/'+ this.data ]);
 }
 dateFromNow(date){ 
   return moment(date).fromNow(date); 
 }
  
}
