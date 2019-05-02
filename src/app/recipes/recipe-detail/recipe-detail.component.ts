import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipes/recipe-list/recipe.model';
import { RecipesService } from '../../services/recipes.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  id: number
  selectedRecipe: Recipe
  constructor(private recipesService: RecipesService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id']
        this.selectedRecipe = this.recipesService.getRecipe(this.id)
      }
    )
  }

  onAddToShoppingList(){
    this.recipesService.addIngredientsToShoppingList(this.selectedRecipe.ingredients)
  }

}
