import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipe-list/recipe.model'
import { RecipesService } from '../services/recipes.service'

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe
  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipesService.selectedRecipe
    .subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe
      }
    )
  }

}
