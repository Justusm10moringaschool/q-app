import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlighteQuote]'
})
export class HighlighteQuoteDirective {

  constructor(private elem:ElementRef) {
    this.elem.nativeElement.style.backgroundColor='yellow';
  }
  
    
   

}
