import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PartnerModel } from 'src/app/partner/partner-model';
import { PartnerViewService } from 'src/app/partner/view/partner-view.service';
import { i18n } from 'src/i18n';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-partner-view',
  templateUrl: './partner-view.component.html',
})
export class PartnerViewComponent implements OnInit {
  constructor(
    private service: PartnerViewService,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {}

  async ngOnInit() {
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );


    
  }

  presenter(row, fieldName) {
    return PartnerModel.presenter(row, fieldName);
  }

  get fields() {
    return PartnerModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('dashboard.menu')],
    [i18n('entities.partner.menu'), '/partner'],
    [i18n('entities.partner.view.title')],
  ];
}
