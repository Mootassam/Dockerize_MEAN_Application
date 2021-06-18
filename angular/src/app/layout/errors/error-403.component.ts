import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-error-403',
  templateUrl: './error-403.component.html',
})
export class Error403Component implements OnInit {
  constructor( private router : Router, private authService : AuthService ) {}
url : any
  ngOnInit(): void {

    if(this.authService.roles == "admin" || this.authService.roles == "manager"){ 
      this.url = ``
        }
    else{ 
      this.url = `/member`
    }
  }

}
