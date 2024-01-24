import { Component } from '@angular/core';

@Component({
  selector: 'products-basics-page',
  templateUrl: './basics-page.component.html',
  styles: [
  ]
})
export class BasicsPageComponent {
  public nameLowercase: string = 'john doe';
  public nameUpperCase: string = 'JOHN DOE';
  public nameTitleCase: string = 'JoHn DoE';

  public customDate: Date = new Date();
}
