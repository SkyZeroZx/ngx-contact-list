import { Pipe, PipeTransform } from '@angular/core';
import { Utils } from './util';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(list: any[], obj: any) {
    if (list && Array.isArray(list) && obj && typeof obj === 'object') {
      let newList = list.filter((item: any) => {
        for (let key in obj) {
          if (obj[key] == null || obj[key] == '') {
            return true;
          }

          if (item[key].toLowerCase().includes(obj[key].toLowerCase().trim())) {
            return true;
          }

          if (obj[key].toLowerCase().trim().split(' ').length > 1) {
            const data = obj[key].toLowerCase().trim();

            if (Utils.getFullString(item, obj).includes(data)) {
              return true;
            }
          }
        }
      });

      return newList;
    }

    return list;
  }
}
