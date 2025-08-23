import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[smartAssistZoomout]'
})
export class Zoomout {
  constructor(private ele: ElementRef) { // Dependency Injection
    console.log(this.ele)
  } // ele is object of ElementRef class

  @HostListener('mouseenter')
  onMouseEnter() {
    this.ele.nativeElement.style.transform = 'scale(100%,110%)'
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.ele.nativeElement.style.transform = 'scale(100%)'
  }
}
