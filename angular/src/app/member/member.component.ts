import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { CategoryService } from 'src/app/dashboard/category.service';
import { StatusService } from 'src/app/dashboard/status.service';
import { i18n } from 'src/i18n';
import * as io from 'socket.io-client'; 
import { Router } from '@angular/router';
import {environment} from 'src/environments/environment.localhost'

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
  
})
export class MemberComponent implements OnInit {
 Open = i18n('dashboard.status.open') ;
 Closed = i18n('dashboard.status.closed') ;
 waitting = i18n('dashboard.status.waitting') ;
 Canceled = i18n('dashboard.status.canceled') ;

 socket : any ; 

 
  constructor(private authService: AuthService, private service : StatusService 
    , private categoryService : CategoryService,
    private router : Router) {
    this.socket = io(environment.urlsocket); 
  }
  async ngOnInit() { 


    await this.categoryService.MemeberCategory(); 
    await this.service.MemberStatus();    
    this.labels; 
    this.conts; 
    this.labelc; 
    this.contc;
 


  
    // this.socket.on('refreshPage',data=>{ 
    //   this.categoryService.MemeberCategory();   
    //   this.service.MemberStatus();
    //   this.bar; 
    //   this.doughnut
    // });

  }
  tabLoadTimes: Date[] = [];

  getTimeLoaded(index: number) {
    if (!this.tabLoadTimes[index]) {
      this.tabLoadTimes[index] = new Date();
    }

    return this.tabLoadTimes[index];
  }

// status Member //
  get loadings(){ 
    return this.service.loadings
  }
  get labels(){ 
    return this.service.labelm
  }
  get conts(){ 
    return this.service.countm  
  }

//  category Memeber // 
  get labelc(){ 
    return this.categoryService.labelm
  }
  get contc(){ 
    return this.categoryService.countm  
  }
  get loadingc(){ 
    return this.categoryService.loadingm
  }

  bar = {
    type: 'bar',
    data: {
      labels: this.labels,
      datasets: [
        {
          
          backgroundColor: [
            '#FF6384',
            '#4BC0C0',
            '#FFCE56',
            '#E7E9ED',
            '#36A2EB',
          ],
          borderColor: '#36A2EB',
          hoverBackgroundColor: [
            '#FF6384',
            '#4BC0C0',
            '#FFCE56',
            '#E7E9ED',
            '#36A2EB',
          ],
          hoverBorderColor: [
            '#FF6384',
            '#4BC0C0',
            '#FFCE56',
            '#E7E9ED',
            '#36A2EB',
          ],
          data: this.conts,
        },
   
      ],
    },
    options: {
   
      title: {
        display: true,
        
        text: i18n('dashboard.text.status'),

      },
      legend: {
        display: false,
      },
      scales: {
        xAxes: [
          {
            display: true,
          },
        ],
        yAxes: [{
          ticks: {
              beginAtZero: true,
              precision: 0
                      },
        //   gridLines: {
        //     color: "rgba(0, 0, 0, 0)",
        // } 
      }]
      },
    },
  };





  doughnut = {
    type: 'doughnut',
    data: {
      labels: this.labelc
      ,
      datasets: [
        {
          data: this.contc,
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
          ],
        },
      ],
    },
    options :{
      title: {
        display: true,
        
        text: i18n('dashboard.text.category'),

      },
    }
  };


}
