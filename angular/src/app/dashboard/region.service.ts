import { Injectable } from '@angular/core';
import { DashbordComponentApi } from 'src/app/dashboard/dashbord-component.api';
import { ErrorService } from 'src/app/shared/error/error.service';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  loadingr = false;
  countr :any= [] ;  
  labelr :any =[]; 
  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,

  ) {}



  async Region() {
    try {

      this.loadingr = true;
      this.labelr.length=0
      this.countr.length=0
      
      const record = await DashbordComponentApi.findByRegion();
      
      for (const dataObj of record) {
        this.labelr.push(i18n('entities.testimony.enumerators.region.'+dataObj._id)); 
        this.countr.push(dataObj.count);        
        }
      this.loadingr = false;
    } catch (error) {
      this.errorService.handle(error);
      this.labelr.length=0
      this.countr.length=0
      this.loadingr = false;

    }
  }
}
