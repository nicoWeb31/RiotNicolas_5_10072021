import { Component, OnInit } from '@angular/core';
import { MediaService } from 'src/app/core/core-media';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private mediaService: MediaService) { }

  ngOnInit(): void {

  }

}
