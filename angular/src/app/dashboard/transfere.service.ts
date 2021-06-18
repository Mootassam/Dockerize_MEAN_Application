import { Injectable } from '@angular/core';
import { DashbordComponentApi } from 'src/app/dashboard/dashbord-component.api';
import { ErrorService } from 'src/app/shared/error/error.service';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class TransfereService {
  loadingt = false;
  countt :any= [] ;  
  labelt :any =[]; 
  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,

  ) {}




  async Transfere() {
    try {

      this.loadingt = true;

      this.labelt.length=0
      this.countt.length=0
      const record = await DashbordComponentApi.findByTransfere();
      
      for (const dataObj of record) {
         
        for (const item of dataObj.user) {
         this.labelt.push(item.fullName); 
       }
        this.countt.push(dataObj.count);       
        }
      this.loadingt = false;
    } catch (error) {
      this.errorService.handle(error);
      this.labelt.length=0
      this.countt.length=0
      this.loadingt = false;

    }
  }
}
