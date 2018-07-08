import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../model/color';

@Pipe({
  name: 'colorName'
})
export class ColorNamePipe implements PipeTransform {

  transform(value: Color, args?: any): string {
    console.count('getColorName pipe invoked');
    switch (value) {
      case Color.BLACK:
        return 'Black color';
      case Color.BLUE:
        return 'Blue color';
      case Color.GREEN:
        return 'Green color';
      case Color.RED:
        return 'Red color';
      case Color.WHITE:
        return 'White color';
    }
  }

}
