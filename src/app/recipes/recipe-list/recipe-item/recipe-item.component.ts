import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  recipes = [];
  
  constructor() {}

  ngOnInit() {}
}
