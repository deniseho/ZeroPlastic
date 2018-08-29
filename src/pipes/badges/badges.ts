import { Pipe, PipeTransform } from '@angular/core';
import { badgeList } from '../../shared/badgeList';

@Pipe({
  name: 'badges',
})
export class BadgesPipe implements PipeTransform {

  transform(achieved: number, index: number) {
    if(achieved==1){
      return badgeList[index].unlockImgUrl;
    }else{
      return badgeList[index].lockImgUrl;
    }
  }
}