import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPokemonPipe'
})
export class FilterPokemonPipePipe implements PipeTransform {

  //transform(value: any[], searchString?: string): any {
  //  if (typeof value !== 'undefined') {
  //    return value.filter((e) => {
  //      return e.toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
  //      //return e..toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
  //    });
  //  } else {
  //    return [];
  //  }
  //}

  transform(value: any[], property?: string, searchString?: string): any {
    if (typeof value !== 'undefined') {
      return value.filter((e) => {
        return e[property].toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
      });
    } else {
      return [];
    }
  }
}
