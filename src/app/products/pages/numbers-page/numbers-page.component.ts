import {Component} from '@angular/core';

@Component({
  selector: 'products-numbers-page',
  templateUrl: './numbers-page.component.html',
  styles: []
})
export class NumbersPageComponent {
  public totalSales: number = 100;
  public percent: number = 0.7;
}
