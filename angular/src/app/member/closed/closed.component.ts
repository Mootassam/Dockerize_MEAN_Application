import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/member/member.service';
import { i18n } from 'src/i18n';
import * as moment from 'moment'

@Component({
  selector: 'app-closed',
  templateUrl: './closed.component.html',
  styleUrls: ['./closed.component.css'],
})
export class ClosedComponent implements OnInit {
  medium = i18n('dashboard.priority.medium') ;
  dang = i18n('dashboard.priority.hight') ;
  low = i18n('dashboard.priority.low') ;

  add = i18n('dashboard.assign.save');
  cancel =i18n('dashboard.assign.cancel') ;
  constructor( private service : MemberService) { }
 

 async ngOnInit() {
  await  this.service.Closed();    
    }

  get record(){ 
  return  this.service.record  ; 
  }

  get count(){ 
    return this.service.countc; 
  }

  get loading(){ 
    return this.service.loadingc ; 
  }
  dateFromNow(date){ 
    return moment(date).fromNow(date); 
  }
}