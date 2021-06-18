import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { i18n } from 'src/i18n';
import { DashboardService  } from "src/app/dashboard/dashboard.service";
import { StatusService  } from "src/app/dashboard/status.service";
import { TransfereService  } from "src/app/dashboard/transfere.service";
import { RegionService  } from "src/app/dashboard/region.service";
import { PartenarService  } from "src/app/dashboard/partenar.service";
import { CategoryService  } from "src/app/dashboard/category.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
 
  constructor(
    private authService: AuthService, 
    private StatusService : StatusService, 
    private TransfereService : TransfereService, 
    private RegionService : RegionService, 
    private PartenarService : PartenarService, 
    private CategoryService : CategoryService, 
    private router : Router
) {}

  
async ngOnInit() { 

  await this.CategoryService.Category();  
  await this.StatusService.Status(); 
  await this.TransfereService.Transfere(); 
  await this.RegionService.Region();  
  await this.PartenarService.Partenar();  

  this.doughnut; 
  this.bar; 
  this.barAssign; 
  this.barPartenar; 
  this.barRegion; 
  this.barRegion; 

   
}


// function to Majus // 

 
// status// 
  get loadings(){ 
    return this.StatusService.loadings
  }
  get labels(){ 
    return this.StatusService.labels
  }
  get conts(){ 
    return this.StatusService.counts
  }

// Transfere//
  get labelt(){ 
    return this.TransfereService.labelt
  }
  get countt(){ 
    return this.TransfereService.countt
  }
  get loadingt(){ 
    return this.TransfereService.loadingt
  }

  // region // 


  get labelr(){ 
    return this.RegionService.labelr
  }
  get countr(){ 
    return this.RegionService.countr
  }

  get loadingr(){ 
    return this.RegionService.loadingr
  }

  // partenar // 

  get loadingp(){ 
    return this.PartenarService.loadingp
  }
  get labelp(){ 
    return this.PartenarService.labelp
  }
  get countp(){ 
    return this.PartenarService.countp
  }

  // Category // 

  get counts (){ 
    return this.CategoryService.countc
    }
    get loadingc(){
    return this.CategoryService.loadingc;
    }
    get labelc(){
    return this.CategoryService.labelc;
    }

    doughnut = {
      type: 'doughnut',
      data: {
        labels: this.labelc,
        datasets: [
          {
            data: this.counts,
            backgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
              '#ffa600',
              '#ff6361',
              '#ff7c43',
              '#48bee7',
              '#6fc9b0',
              '#00e5a6',
              '#97a7b6',
              '#e6a9b3',
              '#dce1e6',
              '#5098cd',
              '#73c779',
              '#b5afd1',
              '#0093a6',
              '#ffd6cd',
              '#0094a3',
              '#2cd182',
              '#f85a58',
              '#564e8b',
              '#f85a58',
              '#003f5c',
              '#7efff8',


              
            ],
            hoverBackgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
              '#ffa600',
              '#ff6361',
              '#ff7c43',
              '#48bee7',
              '#6fc9b0',
              '#00e5a6',
              '#97a7b6',
              '#e6a9b3',
              '#dce1e6',
              '#5098cd',
              '#73c779',
              '#b5afd1',
              '#0093a6',
              '#ffd6cd',
              '#0094a3',
              '#2cd182',
              '#f85a58',
              '#564e8b',
              '#f85a58',
              '#003f5c',
              '#7efff8',
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



  barPartenar = {
    type: 'bar',
    data: {
      labels: this.labelp,
      datasets: [
        {
          backgroundColor: [
            '#97a7b6',
            '#e6a9b3',
            '#dce1e6',
            '#5098cd',
            '#73c779',
            '#b5afd1',
            '#0093a6',
            '#ffd6cd',
            '#FF6384',
              '#36A2EB',
              '#FFCE56',
              '#ffa600',
              '#ff6361',
              '#ff7c43',
              '#48bee7',
              '#6fc9b0',
              '#00e5a6',
              '#0094a3',
              '#2cd182',
              '#f85a58',
              '#564e8b',
              '#f85a58',
              '#003f5c',
              '#7efff8',
          ],
          borderColor: '#36A2EB',
          hoverBackgroundColor: [
            '#97a7b6',
            '#e6a9b3',
            '#dce1e6',
            '#5098cd',
            '#73c779',
            '#b5afd1',
            '#0093a6',
            '#ffd6cd',
            '#FF6384',
              '#36A2EB',
              '#FFCE56',
              '#ffa600',
              '#ff6361',
              '#ff7c43',
              '#48bee7',
              '#6fc9b0',
              '#00e5a6',
              '#0094a3',
              '#2cd182',
              '#f85a58',
              '#564e8b',
              '#f85a58',
              '#003f5c',
              '#7efff8',
          ],
          hoverBorderColor: [
            '#97a7b6',
            '#e6a9b3',
            '#dce1e6',
            '#5098cd',
            '#73c779',
            '#b5afd1',
            '#0093a6',
            '#ffd6cd',
            '#FF6384',
              '#36A2EB',
              '#FFCE56',
              '#ffa600',
              '#ff6361',
              '#ff7c43',
              '#48bee7',
              '#6fc9b0',
              '#00e5a6',
              '#0094a3',
              '#2cd182',
              '#f85a58',
              '#564e8b',
              '#f85a58',
              '#003f5c',
              '#7efff8',
          ],
          data: this.countp,
        },
   
      ],
    },
    options: {
      title: {
        display: true,
        
        text: i18n('dashboard.text.partenar'),

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
              callback: function(value) {if (value % 1 === 0) {return value;}}

          }
      }]
      },
    },
  };




  barRegion = {
    type: 'bar',
    data: {
      labels: this.labelr ,
      datasets: [
        {
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#ffa600',
            '#ff6361',
            '#ff7c43',
            '#2cd182',
            '#f85a58',
            '#564e8b',
            '#f85a58',
            '#003f5c',
            '#7efff8',
  
            '#48bee7',
            '#6fc9b0',
            '#00e5a6',
            '#97a7b6',
            '#e6a9b3',
            '#dce1e6',
            '#5098cd',
            '#73c779',
            '#b5afd1',
            '#0093a6',
            '#ffd6cd',
            '#0094a3',
         
          ],
          borderColor: '#36A2EB',
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#ffa600',
            '#ff6361',
            '#ff7c43',
            '#2cd182',
            '#f85a58',
            '#564e8b',
            '#f85a58',
            '#003f5c',
            '#7efff8',
  
            '#48bee7',
            '#6fc9b0',
            '#00e5a6',
            '#97a7b6',
            '#e6a9b3',
            '#dce1e6',
            '#5098cd',
            '#73c779',
            '#b5afd1',
            '#0093a6',
            '#ffd6cd',
            '#0094a3',
          ],
          hoverBorderColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#ffa600',
            '#ff6361',
            '#ff7c43',
            '#2cd182',
            '#f85a58',
            '#564e8b',
            '#f85a58',
            '#003f5c',
            '#7efff8',
  
            '#48bee7',
            '#6fc9b0',
            '#00e5a6',
            '#97a7b6',
            '#e6a9b3',
            '#dce1e6',
            '#5098cd',
            '#73c779',
            '#b5afd1',
            '#0093a6',
            '#ffd6cd',
            '#0094a3',
          ],
          data: this.countr,
        },
   
      ],
    },
    options: {

   
      title: {
        display: true,
        
        text: i18n('dashboard.text.region'),

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
              callback: function(value) {if (value % 1 === 0) {return value;}}

          }
      }]
      },
    },
  };


  barAssign= {
    type: 'bar',
    data: {
      labels: this.labelt,
      datasets: [
        {
          backgroundColor: [
            '#ffa600',
            '#ff6361',
            '#ff7c43',
            '#48bee7',
            '#5098cd',
            '#73c779',
            '#b5afd1',
            '#0093a6',
            '#ffd6cd',
            '#0094a3',
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
       
            '#6fc9b0',
            '#00e5a6',
            '#97a7b6',
            '#e6a9b3',
            '#dce1e6',
           
            '#2cd182',
            '#f85a58',
            '#564e8b',
            '#f85a58',
            '#003f5c',
            '#7efff8',
          ],
          borderColor: '#36A2EB',
          hoverBackgroundColor: [
            '#ffa600',
            '#ff6361',
            '#ff7c43',
            '#48bee7',
            '#5098cd',
            '#73c779',
            '#b5afd1',
            '#0093a6',
            '#ffd6cd',
            '#0094a3',
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
       
            '#6fc9b0',
            '#00e5a6',
            '#97a7b6',
            '#e6a9b3',
            '#dce1e6',
           
            '#2cd182',
            '#f85a58',
            '#564e8b',
            '#f85a58',
            '#003f5c',
            '#7efff8',
          ],
          hoverBorderColor: [
            '#ffa600',
            '#ff6361',
            '#ff7c43',
            '#48bee7',
            '#5098cd',
            '#73c779',
            '#b5afd1',
            '#0093a6',
            '#ffd6cd',
            '#0094a3',
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
       
            '#6fc9b0',
            '#00e5a6',
            '#97a7b6',
            '#e6a9b3',
            '#dce1e6',
           
            '#2cd182',
            '#f85a58',
            '#564e8b',
            '#f85a58',
            '#003f5c',
            '#7efff8',
          ],
          data: this.countt,
        },
   
      ],
    },
    options: {
      title: {
        display: true,
        
        text: i18n('dashboard.text.assign'),

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
              callback: function(value) {if (value % 1 === 0) {return value;}}

          }
      }]
      },
    },
  };

  bar = {
    type: 'bar',
    data: {
      labels: this.labels,
      datasets: [
        {
          
          backgroundColor: [
          
            '#5098cd',
            '#ffd6cd',
            '#0094a3',
            '#2cd182',
           '#003f5c',
         
          ],
          borderColor: '#36A2EB',
          hoverBackgroundColor: [
            '#5098cd',
            '#ffd6cd',
            '#0094a3',
            '#2cd182',
           '#003f5c',
          ],
          hoverBorderColor: [
            '#5098cd',
            '#ffd6cd',
            '#0094a3',
            '#2cd182',
           '#003f5c',
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
              callback: function(value) {if (value % 1 === 0) {return value;}}

          }
      }]
      },
    },
  };









}
