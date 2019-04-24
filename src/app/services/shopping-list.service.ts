import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../recipes/recipe-list/shared/ingredient.model';

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>()
 private ingredients: Ingredient[] = [
    new Ingredient('Apples', 500),
    new Ingredient('Liver', 600)
  ]

  getIngredients(){
    return this.ingredients.slice()
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient)
    this.ingredientsChanged.emit(this.ingredients.slice())
  }

  constructor() { }
}