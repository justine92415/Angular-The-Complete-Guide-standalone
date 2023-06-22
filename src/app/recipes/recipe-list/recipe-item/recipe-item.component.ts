import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe!: Recipe;

  constructor() {}

  ngOnInit() {
    console.log('[check]', '檢查recipe', this.recipe.name);
  }
}
