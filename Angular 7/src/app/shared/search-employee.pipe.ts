import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBox'
})
export class SearchEmployeePipe implements PipeTransform {

  transform(data: Array<any>, searchTxt: string): Array<any> {
    return data.filter(getData);
    function getData(value, index) {
      console.log('value', value);
      if (value.FullName.toUpperCase().indexOf(searchTxt.toUpperCase()) > -1) {
        return data[index];
      }

    };
  };

}
