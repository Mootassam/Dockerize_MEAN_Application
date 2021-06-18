import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter-preview',
  templateUrl: './filter-preview.component.html',
})
export class FilterPreviewComponent {
  @Input()
  values: any;
  @Input()
  fields: any;
  @Input()
  expanded: boolean;

  get items() {
    return Object.keys(this.values || {})
      .map((key) => {
        return {
          label: this.fields[key].label,
          value: this.fields[key].forFilterPreview(
            this.values[key],
          ),
        };
      })
      .filter(
        (item) =>
          item &&
          (item.value ||
            item.value === 0 ||
            item.value === false),
      );
  }
}
