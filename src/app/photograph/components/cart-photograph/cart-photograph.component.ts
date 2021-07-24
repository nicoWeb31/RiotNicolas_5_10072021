import { Component, Input, OnInit } from '@angular/core';
import { Photograph } from 'src/app/core';

// Lorsque l'utilisateur clique sur la vignette d'un photographe, il est amené à sa
// page.


@Component({
  selector: 'app-cart-photograph',
  templateUrl: './cart-photograph.component.html',
  styleUrls: ['./cart-photograph.component.scss'],
})
export class CartPhotographComponent implements OnInit {
  @Input() photograph!: Photograph;

  constructor() {}

  ngOnInit(): void {}
}
