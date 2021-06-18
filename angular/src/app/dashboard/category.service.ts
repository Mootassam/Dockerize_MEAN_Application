import { Injectable } from '@angular/core';
import { DashbordComponentApi } from 'src/app/dashboard/dashbord-component.api';
import { ErrorService  } from "src/app/shared/error/error.service";
import { getLanguage } from 'src/i18n';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  language;

  loadingc = false;
  countc :any= [] ;  
  labelc :any =[]; 

  countm :any= [] ;  
  labelm :any =[]; 
  loadingm = false ;
  
  constructor(private errorService : ErrorService) { }
  async Category() {
    try {
      this.loadingc = true; 
      this.labelc.length= 0
      this.countc.length= 0    
      const response = await DashbordComponentApi.findByCategory();
      
      this.language = getLanguage();
      for (const dataObj of response) {
      
          for (const object of dataObj.cat) {
            
          const language = localStorage.getItem('language'); 
          if(language == "en"){
            
          this.labelc.push(object.titleEN);
        }
        else if(language == "es"){ 
          this.labelc.push(object.titleFR);
        }
        else { 
          this.labelc.push(object.titleEN);
        }
        }
        this.countc.push(dataObj.count);
        
        
        }
      this.loadingc = false;
    } catch (error) {
      this.errorService.handle(error);
      this.labelc.length= 0
      this.countc.length= 0  
      this.loadingc = false;

    }
  }




  async MemeberCategory() {
    try {
      this.loadingm = true;
      this.labelm.length=0;
      this.countm.length=0;
      const response = await DashbordComponentApi.MemberCategory();    


      for (const dataObj of response) {
      
        for (const object of dataObj.cat) {
        const language = localStorage.getItem('language'); 
        if(language == "en"){
        this.labelm.push(object.titleEN);
      }
      else if(language == "es"){ 
        this.labelm.push(object.titleFR);
      }
      else { 
        this.labelm.push(object.titleEN);
      }
      }
      this.countm.push(dataObj.count);
      
      
      }


   

                
      this.loadingm = false;
    } catch (error) {
      this.errorService.handle(error);
      this.labelm.length=0;
      this.countm.length=0;
      this.loadingm = false;
    }
  }
}
