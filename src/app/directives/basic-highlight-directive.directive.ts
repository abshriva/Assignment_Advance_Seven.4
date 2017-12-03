import { Directive,OnInit,ElementRef ,HostListener,Renderer2,Input} from '@angular/core';

@Directive({
  selector: '[appBasicHighlightDirective]'
})
export class BasicHighlightDirectiveDirective implements OnInit{

  @Input() IndexValue:number;
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
              ) { }

  ngOnInit() {
    
}


@HostListener('mouseenter') mouseOver() 
{

  if(this.IndexValue %2 === 0){
  
  this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lightgreen');
  }
  else
  {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'red');
  }
}


@HostListener('mouseleave') mouseLeave() {
  this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');

}
}
