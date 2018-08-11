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
    var div = document.getElementsByName('ios-arrow-down')[0];

    if (ev.scrollTop >= 0) {
      this.translateAmt = ev.scrollTop / 2;
      this.scaleAmt = 1;
      this.rotate(180, 0);

      if (ev.scrollTop > 250) {
        this.rotate(0, 180);
      }
    } else {
      this.translateAmt = 0;
      this.scaleAmt = -ev.scrollTop / this.headerHeight + 1;
    }

    this
      .renderer
      .setElementStyle(this.header, 'webkitTransform', 'translate3d(0,' + this.translateAmt + 'px,0) scale(' + this.scaleAmt + ',' + this.scaleAmt + ')');

  }

  rotate(start, end) {
    var div = document.getElementsByName('ios-arrow-down')[0];
    var rotated = false,
      deg = rotated
        ? start
        : end;

    div.style.webkitTransform = 'rotate(' + deg + 'deg)';
    div.style.transform = 'rotate(' + deg + 'deg)';
    div.style.transition = 'linear 0.3s';

    rotated = !rotated;
  }

}