import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recipe } from '../recipe.model';
import { DropdownDirective } from 'src/app/shared/dropdown.directive';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [CommonModule,DropdownDirective],
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  @Input() recipe!:Recipe;

  recipeService = inject(RecipeService);

  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
