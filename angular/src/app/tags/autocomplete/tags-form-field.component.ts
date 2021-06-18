import { Component, Input } from '@angular/core';
import { TagsFormModalService } from 'src/app/tags/form/tags-form-modal.service';
import { TagsService } from 'src/app/tags/tags.service';

@Component({
  selector: 'app-tags-form-field',
  templateUrl: './tags-form-field.component.html',
})
export class TagsFormFieldComponent {
  @Input() mode = 'single';
  @Input() submitted = false;
  @Input() control;
  @Input() label;
  @Input() required = false;
  @Input() appAutofocus = false;
  @Input() serverSideSearch = false;
  @Input() fetchFn = null;
  @Input() mapperFn = null;
  @Input()
  ngForm: any;
  @Input() showCreate = false;

  constructor(
    public service: TagsFormModalService,
    public tagsService: TagsService,
  ) {}

  public get hasPermissionToCreate() {
    return this.tagsService.hasPermissionToCreate;
  }

  public async createModalOpen() {
    const record = await this.service.open();
    if (record) {
      if (this.mode === 'multiple') {
        this.control.setValue([
          ...(this.control.value || []),
          this.mapperFn(record),
        ]);
      } else {
        this.control.setValue(this.mapperFn(record));
      }
    }
  }
}
