import { Injectable } from '@angular/core';
import { DashbordComponentApi } from 'src/app/dashboard/dashbord-component.api';
import { ErrorService } from 'src/app/shared/error/error.service';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  loadings = false;
  counts = [] ;  
  labels = []; 
  record = null ;

  countm = []; 
  labelm = []; 

  
  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,

  ) {}

  async Status() {
    try {
      this.loadings = true; 
      this.labels.length=0
      this.counts.length=0
    const record = await DashbordComponentApi.findByStatus(); 
    for (const dataObj of record) {
    
    const language =  localStorage.getItem('language')
    if(language == 'en'){ 


  this.labels.push(dataObj._id); 

    }
    else if(language == 'es'){ 
      if(dataObj._id == "waiting"){ 

        this.labels.push("En attente"); 
        }
      else if(dataObj._id == "open"){ 

        this.labels.push("En cours"); 
            }
       else if(dataObj._id == "closed"){ 

        this.labels.push("Fermé"); 
        }
       
       else if(dataObj._id == "canceled"){ 

        this.labels.push("Annulé"); 
          }
     
    }
    else {
      this.labels.push(dataObj._id); 
    }


      this.counts.push(dataObj.count);
    }    
                 
      this.loadings = false;
    } catch (error){
      this.errorService.handle(error);
      this.counts.length= 0; 
      this.labels.length =0 ; 
      this.loadings = false;
    }
  }



  async MemberStatus() {
    try {
      this.loadings = true; 

      const record = await DashbordComponentApi.MemberStatus(); 
     this.labelm.length=0; 
     this.countm.length=0; 
   

      for (const dataObj of record) {
        const language =  localStorage.getItem('language')
        if(language == 'en'){ 
    
    
      this.labelm.push(dataObj._id); 
    
        }
        else if(language == 'es'){ 
          if(dataObj._id == "waiting"){ 
    
            this.labelm.push("En attente"); 
            }
          else if(dataObj._id == "open"){ 
    
            this.labelm.push("En cours"); 
                }
           else if(dataObj._id == "closed"){ 
    
            this.labelm.push("Fermé"); 
            }
           
           else if(dataObj._id == "canceled"){ 
    
            this.labelm.push("Annulé"); 
              }
         
        }
        else {
          this.labelm.push(dataObj._id); 
        }
        this.countm.push(dataObj.count);
      }
                
      this.loadings = false;
  
    } catch (error) {
      this.errorService.handle(error);
      this.countm=[]; 
      this.labelm=[]; 
      this.loadings = false;

    }
  }


}
