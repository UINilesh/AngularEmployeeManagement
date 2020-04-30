// filter-parent.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'filterParent'
})
export class FilterParentPipe implements PipeTransform {
 
    
    transform(value: string, keyName: string, name: any[],field:string,): string {
       
        if (!name) return value;
        return _.filter(value, function (o) {
               // return o[keyName] == name;
                return o[keyName] == name 
                //o[field].toLowerCase().includes(value.toLowerCase());
              //  item => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1   
        });
         
         
    }
    

}