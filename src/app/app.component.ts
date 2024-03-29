import {Component} from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  constructor(private readonly primeNgConfig: PrimeNGConfig) {
    this.primeNgConfig.ripple = true;
  }
}
