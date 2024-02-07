import {Pipe, PipeTransform} from '@angular/core';
import {Color} from '../interfaces/hero.interface';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(color: Color): string {
    switch (color) {
      case Color.Blue:
        return 'Blue';
        break;
      case Color.Red:
        return 'Red';
        break;
      case Color.Yellow:
        return 'Yellow';
        break;
      case Color.Black:
        return 'Black';
        break;
    }
  }
}
