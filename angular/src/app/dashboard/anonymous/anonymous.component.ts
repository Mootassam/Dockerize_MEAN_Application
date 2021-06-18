import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { AnonymousService } from 'src/app/dashboard/anonymous/anonymous.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-anonymous',
  templateUrl: './anonymous.component.html',
 
})
export class AnonymousComponent implements OnInit {

  constructor(private authService: AuthService , private service  : AnonymousService) {}

 async ngOnInit(){
    await this.service.Anonymous(); 
  }

  get loaginda(){ 
    return this.service.loadinga
  }
  get labela(){ 
    return this.service.labela
  }
  get counta(){ 
    return this.service.counta
  }




  barAnonymous  = {
    type: 'bar',
    data: {
      labels: this.labela,
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
          data: this.counta,
        },
   
      ],
    },
    options: {
      title: {
        display: true,
        
        text: i18n('dashboard.text.anonymous'),

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
        yAxes: [
          {
            display: true,
          },
        ],
      },
    },
  };


}
