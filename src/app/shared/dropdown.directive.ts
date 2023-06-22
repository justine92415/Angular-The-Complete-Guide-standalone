import { Directive, ElementRef, HostListener, Renderer2, inject, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  standalone: true
})
export class DropdownDirective {
  // 自己寫的
  // renderer = inject(Renderer2);
  elRef = inject(ElementRef);
  // isOpen = false;

  // 課程解答
  @HostBinding('class.open') isOpen = false;

  @HostListener('document:click',['$event']) toggleOpen(event:Event) {
    // 自己寫的
    /* if(this.isOpen){
      this.renderer.removeClass(this.elRef.nativeElement, 'open');
      this.isOpen = false;
    }else{
      this.renderer.addClass(this.elRef.nativeElement, 'open');
      this.isOpen = true;
    } */
    // 課程解答
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
}
