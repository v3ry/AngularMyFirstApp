import { Directive,ElementRef,OnInit,Renderer2,HostListener,HostBinding } from '@angular/core';

@Directive({
  selector: '[appHightLight]'
})
export class HighLightDirective implements OnInit {

    @HostBinding('style.backgroundColor') myBackgroundColor!:string;

  constructor() {
    
   }

  ngOnInit(): void {
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color', 'yellow')
  }

  @HostListener('mouseenter') mouseEnterEvent (eventData:Event){
    this.myBackgroundColor = 'yellow'
  }
  @HostListener('mouseleave') mouseLeaveEvent (eventData:Event){
    this.myBackgroundColor = 'transparent'
  }
}
