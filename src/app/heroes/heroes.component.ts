import { Component } from '@angular/core';
import { Hero } from '../hero';
import {
  NgIf,
  NgFor,
  UpperCasePipe,
  /* . . . */
} from '@angular/common';
import { HEROES } from '../mock-heroes';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, UpperCasePipe],
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
