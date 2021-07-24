import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Photograph } from 'src/app/core';

@Component({
  selector: 'app-header-photograph',
  templateUrl: './header-photograph.component.html',
  styleUrls: ['./header-photograph.component.scss'],
})
export class HeaderPhotographComponent implements OnInit {
  @Input() photograph!: Observable<Photograph | null | undefined> | null;
  constructor() {}

  ngOnInit(): void {
    this.photograph?.subscribe((data) => {
      console.log(data);
    });
  }
}
