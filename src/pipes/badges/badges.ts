import { Pipe, PipeTransform } from '@angular/core';

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


var badgeList : any[] = [
  {
      title: "Novice",
      minPoints: 0,
      unlockImgUrl: "assets/imgs/1st-LEVEL.png",
      lockImgUrl:"assets/imgs/1st-LEVEL-lock.png"
  }, {
      title: "Assistant",
      minPoints: 25,
      unlockImgUrl: "assets/imgs/2nd-LEVEL.png",
      lockImgUrl:"assets/imgs/2nd-LEVEL-lock.png"
  }, {
      title: "Advanced",
      minPoints: 60,
      unlockImgUrl: "assets/imgs/3rd-LEVEL.png",
      lockImgUrl:"assets/imgs/3rd-LEVEL-lock.png"
  }, {
      title: "Expert",
      minPoints: 100,
      unlockImgUrl: "assets/imgs/4th-LEVEL.png",
      lockImgUrl:"assets/imgs/4th-LEVEL-lock.png"
  }, {
      title: "Master Environmentalist",
      minPoints: 150,
      unlockImgUrl: "assets/imgs/5th-LEVEL.png",
      lockImgUrl:"assets/imgs/5th-LEVEL-lock.png"
  }
];
