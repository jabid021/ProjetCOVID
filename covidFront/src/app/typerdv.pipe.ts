import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typerdv'
})
export class TyperdvPipe implements PipeTransform {

  transform(value: boolean, ...args: any[]): string {
    if (value == true){
      return "Virtuel"
    }
    else{
      return "Physique"
    }

  }

}
