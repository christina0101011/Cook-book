import { Component, OnInit, EventEmitter } from '@angular/core';
import { Ingredient } from '../recipes/recipe-list/shared/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredientsChanged = new EventEmitter<Ingredient[]>()
  ingredients: Ingredient[] = []

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients()
    this.shoppingListService.ingredientsChanged
    .subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients
      }
    )
  }

  onAddedIngredient(ingredient: Ingredient){
    // this.shoppingListService.emit(ingredient)
    this.ingredients.push(ingredient)
  }

}
