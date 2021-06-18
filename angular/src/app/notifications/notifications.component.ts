import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { i18n } from 'src/i18n';
import * as io from 'socket.io-client';
import { Router } from '@angular/router';
import * as moment from 'moment';

import { NotificationsService } from './notifications.service';
import { TestimonyService } from 'src/app/testimony/testimony.service';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
})
export class NotificationsComponent implements OnInit {
  socket: any;
  constructor(
    private notificationsservice: NotificationsService,
    private testimmonyservice: TestimonyService,
    private router: Router,
  ) {
    this.socket = io('http://172.16.224.151:8080');
  }

  async ngOnInit() {
    await this.notificationsservice.Waitting();
    this.record;
    this.socket.on('refreshNotifications', (data) => {
      this.notificationsservice.Waitting();
    });
    this.socket.on('refreshPage', (data) => {
      this.notificationsservice.Waitting();
      this.record;
      this.counw;
    });
  }

  get record() {
    return this.notificationsservice.notifications;
  }

  get counw() {
    return this.notificationsservice.numberw;
  }
  get count() {
    return this.notificationsservice.count;
  }
  markAsRead(id) {
    this.notificationsservice.AsRead(id);
    this.socket.emit('notifications', {});
  }

  ALlRead() {
    this.notificationsservice.ReadAll();
    this.socket.emit('notifications', {});
  }
  DeleteALl() {
    this.notificationsservice.DeleteAll();
    this.socket.emit('notifications', {});
  }
  Goto() {
    this.router.navigate(['/testimony']);
  }
  time(time: any) {
    return moment(time).fromNow();
  }
}
