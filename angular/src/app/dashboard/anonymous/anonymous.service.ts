import { Injectable } from '@angular/core';
import { DashbordComponentApi } from 'src/app/dashboard/dashbord-component.api';
import { ErrorService } from "src/app/shared/error/error.service";
@Injectable({
  providedIn: 'root'
})
export class AnonymousService {
  loadinga = false ; 
  labela : any =[]; 
  counta:any=[];
  constructor(private errorService : ErrorService) { }



  async Anonymous() {
    try {

      this.loadinga = true;

      
      const record = await DashbordComponentApi.findByAnonymous();
      
      for (const dataObj of record) {
        this.labela.push(dataObj._id); 
        this.counta.push(dataObj.count);       
        }
      this.loadinga = false;
    } catch (error) {
      this.errorService.handle(error);
     
      this.loadinga = false;

    }
  }
}
