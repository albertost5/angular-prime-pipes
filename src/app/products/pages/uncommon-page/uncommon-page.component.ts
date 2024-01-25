import {Component} from '@angular/core';
import {interval} from 'rxjs';

@Component({
  selector: 'products-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styles: []
})
export class UncommonPageComponent {
  // i18nSelect
  public name: string = 'John Doe';
  public gender: 'male' | 'female' = 'male';
  public inviteMap = {
    'male': 'His',
    'female': 'Her'
  }

  public togglePerson(): void {
    if ( this.gender == 'male' ) {
      this.name = 'Lisa Simpson';
      this.gender = 'female';
    } else {
      this.name = 'John Doe';
      this.gender = 'male';
    }
  }

  // i18nPlural
  public clients: string[] = ['John', 'Ferris', 'X'];

  public deleteClient(): void {
    this.clients.pop();
  }

  public messageMapping = {
    '=0': 'There are no clients',
    '=1': 'There is one client',
    'other': 'There are # clients'
  }

  // KeyValuePipe
  public person = {
    name: 'John',
    age: 30,
    country: 'Spain'
  }

  // Async Pipe
  public timer$ = interval(1000);
}
