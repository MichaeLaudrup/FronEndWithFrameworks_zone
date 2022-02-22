import { Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  
  constructor(private elRef: ElementRef,private renderer: Renderer2) { 
    console.log(elRef, renderer )
  }

  ngOnInit(): void {
  }

  @HostListener('mouseenter') mousenter( eventData:Event){
    this.renderer.addClass(this.elRef.nativeElement, 'open'); 
  }

  @HostListener('mouseleave') mouseover( eventData:Event){
    this.renderer.removeClass(this.elRef.nativeElement, 'open'); 
  }

}
