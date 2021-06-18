import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { TenantFormComponent } from 'src/app/tenant/form/tenant-form.component';

import { UserNewFormComponent } from 'src/app/user/form/user-new-form.component';
import { UserNewFormModalComponent } from 'src/app/user/form/user-new-form-modal.component';
import { UserNewFormModalService } from 'src/app/user/form/user-new-form-modal.service';
import { UserFormFieldComponent } from 'src/app/user/autocomplete/user-form-field.component';

import { InformationCategoryFormFieldComponent } from 'src/app/information-category/autocomplete/information-category-form-field.component';
import { InformationCategoryFormModalComponent } from 'src/app/information-category/form/information-category-form-modal.component';
import { InformationCategoryFormModalService } from 'src/app/information-category/form/information-category-form-modal.service';
import { InformationCategoryFormComponent } from 'src/app/information-category/form/information-category-form.component';

import { InformationsFormFieldComponent } from 'src/app/informations/autocomplete/informations-form-field.component';
import { InformationsFormModalComponent } from 'src/app/informations/form/informations-form-modal.component';
import { InformationsFormModalService } from 'src/app/informations/form/informations-form-modal.service';
import { InformationsFormComponent } from 'src/app/informations/form/informations-form.component';

import { TestimonyCategoryFormFieldComponent } from 'src/app/testimony-category/autocomplete/testimony-category-form-field.component';
import { TestimonyCategoryFormModalComponent } from 'src/app/testimony-category/form/testimony-category-form-modal.component';
import { TestimonyCategoryFormModalService } from 'src/app/testimony-category/form/testimony-category-form-modal.service';
import { TestimonyCategoryFormComponent } from 'src/app/testimony-category/form/testimony-category-form.component';

import { ActivityFormFieldComponent } from 'src/app/activity/autocomplete/activity-form-field.component';
import { ActivityFormModalComponent } from 'src/app/activity/form/activity-form-modal.component';
import { ActivityFormModalService } from 'src/app/activity/form/activity-form-modal.service';
import { ActivityFormComponent } from 'src/app/activity/form/activity-form.component';

import { TestimonyFormFieldComponent } from 'src/app/testimony/autocomplete/testimony-form-field.component';
import { TestimonyFormModalComponent } from 'src/app/testimony/form/testimony-form-modal.component';
import { TestimonyFormModalService } from 'src/app/testimony/form/testimony-form-modal.service';
import { TestimonyFormComponent } from 'src/app/testimony/form/testimony-form.component';

import { TagsFormFieldComponent } from 'src/app/tags/autocomplete/tags-form-field.component';
import { TagsFormModalComponent } from 'src/app/tags/form/tags-form-modal.component';
import { TagsFormModalService } from 'src/app/tags/form/tags-form-modal.service';
import { TagsFormComponent } from 'src/app/tags/form/tags-form.component';

import { PartnerFormFieldComponent } from 'src/app/partner/autocomplete/partner-form-field.component';
import { PartnerFormModalComponent } from 'src/app/partner/form/partner-form-modal.component';
import { PartnerFormModalService } from 'src/app/partner/form/partner-form-modal.service';
import { PartnerFormComponent } from 'src/app/partner/form/partner-form.component';

import { PartnerCategoryFormFieldComponent } from 'src/app/partner-category/autocomplete/partner-category-form-field.component';
import { PartnerCategoryFormModalComponent } from 'src/app/partner-category/form/partner-category-form-modal.component';
import { PartnerCategoryFormModalService } from 'src/app/partner-category/form/partner-category-form-modal.service';
import { PartnerCategoryFormComponent } from 'src/app/partner-category/form/partner-category-form.component';

/**
 * This module exists to avoid circular dependencies, because autocompletes and forms
 * from different modules may use each others.
 */
@NgModule({
  declarations: [
    TenantFormComponent,

    UserNewFormComponent,
    UserFormFieldComponent,
    UserNewFormModalComponent,

    InformationCategoryFormComponent,
    InformationCategoryFormFieldComponent,
    InformationCategoryFormModalComponent,

    InformationsFormComponent,
    InformationsFormFieldComponent,
    InformationsFormModalComponent,

    TestimonyCategoryFormComponent,
    TestimonyCategoryFormFieldComponent,
    TestimonyCategoryFormModalComponent,

    ActivityFormComponent,
    ActivityFormFieldComponent,
    ActivityFormModalComponent,

    TestimonyFormComponent,
    TestimonyFormFieldComponent,
    TestimonyFormModalComponent,

    TagsFormComponent,
    TagsFormFieldComponent,
    TagsFormModalComponent,

    PartnerFormComponent,
    PartnerFormFieldComponent,
    PartnerFormModalComponent,

    PartnerCategoryFormComponent,
    PartnerCategoryFormFieldComponent,
    PartnerCategoryFormModalComponent,
  ],
  imports: [SharedModule],
  exports: [
    TenantFormComponent,

    UserNewFormComponent,
    UserFormFieldComponent,

    InformationCategoryFormComponent,
    InformationCategoryFormFieldComponent,

    InformationsFormComponent,
    InformationsFormFieldComponent,

    TestimonyCategoryFormComponent,
    TestimonyCategoryFormFieldComponent,

    ActivityFormComponent,
    ActivityFormFieldComponent,

    TestimonyFormComponent,
    TestimonyFormFieldComponent,

    TagsFormComponent,
    TagsFormFieldComponent,

    PartnerFormComponent,
    PartnerFormFieldComponent,

    PartnerCategoryFormComponent,
    PartnerCategoryFormFieldComponent,
  ],
  providers: [
    UserNewFormModalService,
    InformationCategoryFormModalService,

    InformationsFormModalService,

    TestimonyCategoryFormModalService,

    ActivityFormModalService,

    TestimonyFormModalService,

    TagsFormModalService,

    PartnerFormModalService,

    PartnerCategoryFormModalService,
  ],
  entryComponents: [
    UserNewFormModalComponent,
    InformationCategoryFormModalComponent,

    InformationsFormModalComponent,

    TestimonyCategoryFormModalComponent,

    ActivityFormModalComponent,

    TestimonyFormModalComponent,

    TagsFormModalComponent,

    PartnerFormModalComponent,

    PartnerCategoryFormModalComponent,
  ],
})
export class AppFormAutocompleteModule {}
