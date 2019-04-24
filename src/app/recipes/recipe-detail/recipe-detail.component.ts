import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipes/recipe-list/recipe.model';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

selectedRecipe: Recipe
  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipesService.selectedRecipe
    .subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe
        console.log(this.selectedRecipe)
      }
    )
  }

  onAddToShoppingList(){
    this.recipesService.addIngredientsToShoppingList(this.selectedRecipe.ingredients)
  }

}
