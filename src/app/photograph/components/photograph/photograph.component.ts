import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Media, Photograph } from 'src/app/core';

@Component({
  selector: 'app-photograph',
  templateUrl: './photograph.component.html',
  styleUrls: ['./photograph.component.scss'],
})
export class PhotographComponent implements OnInit {
  photographId! : string | null;
  photographInfo!: Photograph;
  medias!: Media[];

  constructor(
    private route : ActivatedRoute,
  ) {}

  ngOnInit(): void {
    //recuper id du photograph
    this.photographId = this.route.snapshot.paramMap.get('id');
    console.log(this.photographId)

    //recup info du photographInfo
    //recup items du photograph
  }
}
