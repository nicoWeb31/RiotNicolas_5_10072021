import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

//   En cliquant sur une étiquette (tag) dans la barre de navigation, la liste des
// photographes est filtrée pour n'afficher que ceux qui correspondent à cette
// étiquette.

}
