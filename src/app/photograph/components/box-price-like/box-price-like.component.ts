import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-price-like',
  templateUrl: './box-price-like.component.html',
  styleUrls: ['./box-price-like.component.scss']
})
export class BoxPriceLikeComponent implements OnInit {

  @Input() price!: number| null| undefined;
  @Input() like!: number | null| undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
