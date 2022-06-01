import { Pipe, PipeTransform } from '@angular/core';
import { Depense } from '../interface/depense';
import { Revenu } from '../interface/revenu';

@Pipe({
  name: 'sortByDates',
})
export class SortByDatesPipe implements PipeTransform {
  transform(
    value: (Depense | Revenu)[],
    ...args: (Date | undefined)[]
  ): (Depense | Revenu)[] {
    let dateOne = args[0];
    let dateTwo = args[1];
    let returnValues = [];

    if (dateOne && dateTwo) {
      returnValues = value.filter((v) => {
        return new Date(v.date) >= dateOne! && new Date(v.date) <= dateTwo!;
      });
      return returnValues;
    } else if (dateOne && !dateTwo) {
      returnValues = value.filter((v) => {
        return new Date(v.date) >= dateOne!;
      });
      return returnValues;
    } else if (!dateOne && dateTwo) {
      returnValues = value.filter((v) => {
        return new Date(v.date) <= dateTwo!;
      });
      return returnValues;
    }

    return value;
  }
}
