import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectKey'
})
export class ObjectKeyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let arr = []
    for(let k in value) {
      arr.push({
        key: k,
        value: value[k]
      })
    }
    return arr
  }

}
