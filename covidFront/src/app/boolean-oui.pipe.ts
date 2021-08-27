import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanOui'
})
export class BooleanOuiPipe implements PipeTransform {

  transform(value: boolean): string {
    return (value)?"oui":"non";
  }

}
