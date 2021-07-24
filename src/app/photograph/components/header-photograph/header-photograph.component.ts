import { Component, Input, OnInit } from '@angular/core';
import { Photograph } from 'src/app/core';

@Component({
  selector: 'app-header-photograph',
  templateUrl: './header-photograph.component.html',
  styleUrls: ['./header-photograph.component.scss'],
})
export class HeaderPhotographComponent implements OnInit {
  @Input() photograph! : Photograph;
  constructor() {}

  ngOnInit(): void {}
}
