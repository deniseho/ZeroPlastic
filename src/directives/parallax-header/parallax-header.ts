import {Directive, ElementRef, Renderer} from '@angular/core';
import {Platform} from 'ionic-angular';

@Directive({
  selector: '[parallax-header]',
  host: {
    '(ionScroll)': 'onContentScroll($event)',
    // '(on-swipe-up)': 'onContentScroll($event)',
    '(window:resize)': 'onWindowResize($event)'
  }
})
export class ParallaxHeaderDirective {

  header : any;
  headerHeight : any;
  translateAmt : any;
  scaleAmt : any;

  constructor(public element : ElementRef, public renderer : Renderer, public platform : Platform) {}

  ngOnInit() {

    let content = this
      .element
      .nativeElement
      .getElementsByClassName('scroll-content')[0];
    this.header = content.getElementsByClassName('header-image')[0];
    let mainContent = content.getElementsByClassName('main-content')[0];

    this.headerHeight = this.header.clientHeight;

    this
      .renderer
      .setElementStyle(this.header, 'webkitTransformOrigin', 'center bottom');
    this
      .renderer
      .setElementStyle(this.header, 'background-size', 'cover');
    this
      .renderer
      .setElementStyle(mainContent, 'position', 'absolute');

  }

  onWindowResize(ev) {
    this.headerHeight = this.header.clientHeight;
  }

  onContentScroll(ev) {

    ev.domWrite(() => {
      this.updateParallaxHeader(ev);
    });

  }

  updateParallaxHeader(ev) {
    if (ev.scrollTop >= 0) {
      this.translateAmt = ev.scrollTop / 2;
      this.scaleAmt = 1;
      
      var rotated = false;
      var div = document.getElementsByName('ios-arrow-down')[0],
        deg = rotated
          ? 0
          : 180;

      div.style.webkitTransform = 'rotate(' + deg + 'deg)';
      div.style.transform = 'rotate(' + deg + 'deg)';

      rotated = !rotated;
    } else {
      this.translateAmt = 0;
      this.scaleAmt = -ev.scrollTop / this.headerHeight + 1;
    }

    this
      .renderer
      .setElementStyle(this.header, 'webkitTransform', 'translate3d(0,' + this.translateAmt + 'px,0) scale(' + this.scaleAmt + ',' + this.scaleAmt + ')');

  }

}