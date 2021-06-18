import { Component, OnInit } from '@angular/core';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { SettingsService } from 'src/app/settings/settings.service';
import { UserService } from 'src/app/user/user.service';
import { PlanService } from 'src/app/plan/plan.service';
import { InformationCategoryService } from 'src/app/information-category/information-category.service';
import { InformationsService } from 'src/app/informations/informations.service';
import { TestimonyCategoryService } from 'src/app/testimony-category/testimony-category.service';
import { ActivityService } from 'src/app/activity/activity.service';
import { TestimonyService } from 'src/app/testimony/testimony.service';
import { TagsService } from 'src/app/tags/tags.service';
import { PartnerService } from 'src/app/partner/partner.service';
import { PartnerCategoryService } from 'src/app/partner-category/partner-category.service';
import { DashboardService } from 'src/app/dashboard/dashboard.service';
import { MemberService } from 'src/app/member/member.service';
// import {jQuery} from "jquery"
// (window as any).$ = (window as any).jQuery = jQuery;
import * as $ from "jquery"

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})

export class MenuComponent implements OnInit {
  
  constructor(
    public auditLogService: AuditLogService,
    public settingsService: SettingsService,
    public userService: UserService,
    public MemberService: MemberService,
    public DashboardService: DashboardService,
    public planService: PlanService,
    public informationCategoryService: InformationCategoryService,
    public informationsService: InformationsService,
    public testimonyCategoryService: TestimonyCategoryService,
    public activityService: ActivityService,
    public testimonyService: TestimonyService,
    public tagsService: TagsService,
    public partnerService: PartnerService,
    public partnerCategoryService: PartnerCategoryService,
  ) {}
  
  ngOnInit(): void {  
  
    $(document).ready(function ($) {
      // Variables declarations
      // Sidebar
      var Sidemenu = function () {
        this.$menuItem = $("#sidebar-menu a");
      };
    
      function init() {
        var $this = Sidemenu;
        $("#sidebar-menu a").on("click", function (e) {
          if ($(this).parent().hasClass("submenu")) {
            e.preventDefault();
          }
          if (!$(this).hasClass("subdrop")) {
            $("ul", $(this).parents("ul:first")).slideUp(350);
            $("a", $(this).parents("ul:first")).removeClass("subdrop");
            $(this).next("ul").slideDown(350);
            $(this).addClass("subdrop");
          } else if ($(this).hasClass("subdrop")) {
            $(this).removeClass("subdrop");
            $(this).next("ul").slideUp(350);
          }
        });
        $("#sidebar-menu ul li.submenu a.active")
          .parents("li:last")
          .children("a:first")
          .addClass("active")
          .trigger("click");
      }
      // Sidebar Initiate
      init();
    


    
    
     
    });
          
      
  }
}
