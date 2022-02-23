import { Directive ,ElementRef} from '@angular/core';

@Directive({
  selector: '[appApphight]'
})
export class ApphightDirective {

  constructor (el:ElementRef) { 
el.nativeElement.style.backgroundColor='red'

  }

 
}
