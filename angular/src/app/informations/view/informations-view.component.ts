import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InformationsModel } from 'src/app/informations/informations-model';
import { InformationsViewService } from 'src/app/informations/view/informations-view.service';
import { i18n } from 'src/i18n';
import { MapsAPILoader, MouseEvent } from '@agm/core';

import { AuthService } from 'src/app/auth/auth.service';
let apiLoaded = false ; 

@Component({
  selector: 'app-informations-view',
  templateUrl: './informations-view.component.html',
})
export class InformationsViewComponent implements OnInit {
   id :any

   lat: number;
   lng: number ;
   tlat  :boolean
   tlng : boolean
   zoom=16 ;
  
  constructor(
    private service: InformationsViewService,
    private route: ActivatedRoute,
    private authService: AuthService,

  ) {}
  async ngOnInit() {       
    if (!apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      apiLoaded = true;
    }
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
    
      this.Id_Youtube_videos
      this.Lalitudes;
      this.Longitude;

      
     }
  presenter(row, fieldName) {
    return InformationsModel.presenter(row, fieldName);
  }
  get fields() {
    return InformationsModel.fields;
  }
  get loading() {
    return this.service.loading;
  }
  get record() {
    return this.service.record;
  }
  get Id_Youtube_videos(){ 
    const videos = this.record.videos ; 
    const Id_url = videos.split('/watch?v=')[1];
    if(Id_url.includes("&")){ 
    const url_id = Id_url.split('&')[0];
    return this.id = url_id 
    }
    return this.id =Id_url ; 
    }  
    get Lalitudes(){   
      if(this.record.googleMapsPosition == null || this.record.googleMapsPosition === "" || this.record.googleMapsPosition == undefined){
      this.tlat == false
      return this.tlat ; 
      }else {
      const lal = this.record.googleMapsPosition.split(', ')[0] ; 
      return [this.lat = parseFloat(lal) , this.tlat = true ]  ; 
         }   
    }
    get Longitude(){ 
      if(this.record.googleMapsPosition == null || this.record.googleMapsPosition === ""  || this.record.googleMapsPosition == undefined){
        this.tlng == false
        return this.tlng ; 
      
      }
      else {
      const longitude = this.record.googleMapsPosition.split(', ')[1];
      return this.lng = parseFloat(longitude);  
    }
    } 

  breadcrumb = [
    [i18n('dashboard.menu')],
    [i18n('entities.informations.menu'), '/informations'],
    [i18n('entities.informations.view.title')],
  ];
}
