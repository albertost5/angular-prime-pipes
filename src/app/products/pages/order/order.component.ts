import {Component} from '@angular/core';
import {Color, Heroe} from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: []
})
export class OrderComponent {
  public isUpperCase: boolean = false;
  public heroes: Heroe[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.Blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.Black
    },
    {
      name: 'Wolverine',
      canFly: false,
      color: Color.Yellow
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.Red
    }
  ];
  public orderByHeroKey: keyof Heroe = 'canFly';

  toggleIsUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrderBy(heroKey: keyof Heroe) {
    this.orderByHeroKey = heroKey
  }
}
