import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-slider',
  moduleId: module.id,
  templateUrl: `slider.component.html`,
  styleUrls: ['slider.component.css'],
})

export class SliderComponent {

    @Input('isChecked')
    isChecked: Boolean;

    @Input('checkedValue')
    checkedValue: String;

    @Input('unCheckedValue')
    unCheckedValue: String;

    @Output('isCheckedChange')
    isCheckedChange = new EventEmitter<Boolean>();

    toggleChange(model: Boolean) {
      this.isChecked = model;
      this.isCheckedChange.emit(model);
  }
}

