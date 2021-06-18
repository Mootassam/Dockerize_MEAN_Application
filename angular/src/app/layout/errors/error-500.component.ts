import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-error-500',
  templateUrl: './error-500.component.html',
})
export class Error500Component implements OnInit {
  constructor( private router : Router, private authService : AuthService ) {}
  url : any
    ngOnInit(): void {
  
      if(this.authService.roles == "admin" || this.authService.roles == "manager") { 
        this.url = ``
          }
      else{ 
        this.url = `/member`
      }
    }
}
