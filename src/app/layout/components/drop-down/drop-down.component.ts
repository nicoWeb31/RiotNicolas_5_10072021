import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// https://www.tutsmake.com/angular-11-select-dropdown-example-tutorial/
@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss'],
})
export class DropDownComponent {
  @Output() emitFilter = new EventEmitter<string>();
  constructor() {}


  form = new FormGroup({
    filters: new FormControl('', Validators.required),
  });

  getFormValue() {
    console.log('pop')

  }

  setValue(value: any) {
    this.emitFilter.emit(value);
  }
}
