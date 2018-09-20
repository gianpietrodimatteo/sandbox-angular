import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  // Tem que anotar pra poder passar esse parametro na tag html
  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
