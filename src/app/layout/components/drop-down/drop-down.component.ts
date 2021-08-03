import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';

// https://www.tutsmake.com/angular-11-select-dropdown-example-tutorial/
@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss'],
})
export class DropDownComponent {
  @Output() emitFilter = new EventEmitter<string>();
  myDropdown!: any;

  clickEvent$!: Observable<Event>;

  constructor() {}

  ngOnInit(): void {
    this.myDropdown = document.getElementById('myDropdown');
  }

  operDropdown() {
    this.myDropdown?.classList.toggle('show');
  }

  emitEvent(event: string) {
    this.emitFilter.emit(event);
  }

  filterPopularity() {
    this.emitEvent('popularity');
    this.myDropdown?.classList.toggle('show');
  }

  filterTitle() {
    this.emitEvent('title');
    this.myDropdown?.classList.toggle('show');
  }
}
