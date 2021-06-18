import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/member/member.service';
import { i18n } from 'src/i18n';
import * as moment from 'moment'
@Component({
  selector: 'app-open',
  templateUrl: './open.component.html',
  styleUrls: ['./open.component.css'],
})
export class OpenComponent implements OnInit {
  medium = i18n('dashboard.priority.medium') ;
  dang = i18n('dashboard.priority.hight') ;
  low = i18n('dashboard.priority.low') ;

  add = i18n('dashboard.assign.save');
  cancel =i18n('dashboard.assign.cancel') ;
  constructor( private service : MemberService) { }
 

 async ngOnInit() {
  await  this.service.Open();    
    }
  get record(){ 
  return  this.service.record  ; 
  }
  get count(){ 
    return this.service.counto;
  }

  get loading(){ 
    return this.service.loadingo ; 
  }

  dateFromNow(date){ 
    return moment(date).fromNow(date); 
  }


}