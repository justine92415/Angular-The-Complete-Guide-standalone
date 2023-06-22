import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHightlightDirective } from './better-highlight/better-hightlight.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,BasicHighlightDirective,BetterHightlightDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers = [1, 2, 3, 4, 5];
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];
  onlyOdd = false;
}
