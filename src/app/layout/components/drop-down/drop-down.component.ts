import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// https://www.tutsmake.com/angular-11-select-dropdown-example-tutorial/
@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss'],
})
export class DropDownComponent {
  @Output() emitFilter = new EventEmitter<string>();
  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (this.eRef.nativeElement.contains(event.target)) {
      console.log('inside');
    } else {
      console.log('out');
    }
  }

  constructor(private eRef: ElementRef) {}

  form = new FormGroup({
    filters: new FormControl('', Validators.required),
  });

  getFormValue() {
    console.log('pop');
  }

  setValue(value: any) {
    this.emitFilter.emit(value);
  }

  operDropdown() {
    document.getElementById('myDropdown')?.classList.toggle('show');
  }

  // window.onclick = function(event) {
  //   if (!event.target.matches('.dropbtn')) {
  //     var dropdowns = document.getElementsByClassName("dropdown-content");
  //     var i;
  //     for (i = 0; i < dropdowns.length; i++) {
  //       var openDropdown = dropdowns[i];
  //       if (openDropdown.classList.contains('show')) {
  //         openDropdown.classList.remove('show');
  //       }
  //     }
  //   }
  // }
}
