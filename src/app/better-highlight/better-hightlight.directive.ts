import { Directive, OnInit, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBetterHightlight]',
  standalone: true
})
export class BetterHightlightDirective implements OnInit {

  constructor(private elRef: ElementRef,private renderer:Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
  }

}
