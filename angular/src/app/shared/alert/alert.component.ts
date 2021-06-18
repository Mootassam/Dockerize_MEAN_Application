import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface AlertData {
  title: string;
  yesLabel: string;
}

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
})
export class AlertComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: AlertData,
  ) {}
}
