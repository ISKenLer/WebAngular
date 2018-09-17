import { Directive } from '@angular/core';

@Directive({
  selector: '[NgModel]:not([formControlName]):not([formControl])',
  providers: [],

})

export class NgModelDirective {

  constructor() { }

}
