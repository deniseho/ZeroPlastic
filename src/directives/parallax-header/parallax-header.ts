import { Directive, ElementRef, Renderer } from '@angular/core';
import { Platform } from 'ionic-angular';
 
@Directive({
  selector: '[parallax-header]',
  host: {
    '(ionScroll)': 'onContentScroll($event)',
    // '(on-swipe-up)': 'onContentScroll($event)',
    '(window:resize)': 'onWindowResize($event)'
  }
})
export class ParallaxHeaderDirective {
 
    header: any;
    headerHeight: any;
    translateAmt: any;
    scaleAmt: any;
 
    constructor(public element: ElementRef, public renderer: Renderer, public platform: Platform){
 
    }
 
    ngOnInit(){
 
        let content = this.element.nativeElement.getElementsByClassName('scroll-content')[0];
        this.header = content.getElementsByClassName('header-image')[0];
        let mainContent = content.getElementsByClassName('main-content')[0];
 
        this.headerHeight = this.header.clientHeight;
 
        this.renderer.setElementStyle(this.header, 'webkitTransformOrigin', 'center bottom');
        this.renderer.setElementStyle(this.header, 'background-size', 'cover');
        this.renderer.setElementStyle(mainContent, 'position', 'absolute');
 
    }
 
    onWindowResize(ev){
        this.headerHeight = this.header.clientHeight;
    }
 
    onContentScroll(ev){
 
        ev.domWrite(() => {
            this.updateParallaxHeader(ev);
        });
 

    }
 
    updateParallaxHeader(ev){
      console.log("ev.scrollTop: " + ev.scrollTop)
      console.log("this.platform.height: " + this.platform.height())
      console.log("this.headerHeight: " + this.headerHeight)
      console.log("this.header: " + this.header)
        if(ev.scrollTop >= 0){
            this.translateAmt = ev.scrollTop / 2;
            this.scaleAmt = 1;
        }
        else {
            this.translateAmt = 0;
            this.scaleAmt = -ev.scrollTop / this.headerHeight + 1;
        }
 
        this.renderer.setElementStyle(this.header, 'webkitTransform', 'translate3d(0,'+this.translateAmt+'px,0) scale('+this.scaleAmt+','+this.scaleAmt+')');
 
    }
 
}