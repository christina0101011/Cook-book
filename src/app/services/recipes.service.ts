import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipe-list/recipe.model';
import { Ingredient } from '../recipes/recipe-list/shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable()
export class RecipesService {

  selectedRecipe = new EventEmitter<Recipe>()

  private recipes: Recipe[] = [
    new Recipe('Steak', 
      'Firstrecipe', 
      'https://cdn.shopify.com/s/files/1/1742/1115/products/flatiron-steak_c3aadb96-98b5-49b0-9170-7a1791fa6956_1200x1200.jpg?v=1551347944',
      [
        new Ingredient('Beef', 300)
      ]),
    new Recipe('Terrine', 
      'Second recipe', 
      'https://leitesculinaria.com/wp-content/uploads/fly-images/83244/chicken-pork-pistachio-terrine-400x400-c.jpg',
      [
        new Ingredient('Liver', 500),
        new Ingredient('Apples', 500)
      ])
  ]
  
  getRecipes(){
    return this.recipes.slice()
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients)
  }

  constructor(private shoppingListService: ShoppingListService) { }
}
