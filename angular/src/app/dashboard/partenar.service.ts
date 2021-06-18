import { Injectable } from '@angular/core';
import { DashbordComponentApi } from 'src/app/dashboard/dashbord-component.api';
import { ErrorService } from 'src/app/shared/error/error.service';

@Injectable({
  providedIn: 'root'
})
export class PartenarService {
  loadingp = false;
  countp :any= [] ;  
  labelp :any =[]; 
  constructor(private errorService: ErrorService) { }

  async Partenar() {
    try {

      this.loadingp = true;

      this.labelp.length=0;
      this.countp.length=0;
      const record = await DashbordComponentApi.findByPartenar();
      
      for (const dataObj of record) {
         
        this.labelp.push(dataObj.title)
         this.countp.push(dataObj.count);       
         }
      this.loadingp = false;
    } catch (error) {
      this.errorService.handle(error);
      this.labelp.length=0;
      this.countp.length=0;
      this.loadingp = false;

    }
  }
}
