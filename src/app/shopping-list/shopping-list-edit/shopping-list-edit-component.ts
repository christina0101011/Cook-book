import {Component, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../recipes/recipe-list/shared/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
    selector: 'app-shopping-list-edit',
    styleUrls: ['./shopping-list-edit-component.scss'],
    templateUrl: './shopping-list-edit-component.html'
})

export class ShoppingListEdit {

  @ViewChild('nameInput') nameInputRef: ElementRef
  @ViewChild('amountInput') amountInputRef: ElementRef

  constructor (private slService: ShoppingListService){
  }

  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value
    const ingAmount = this.amountInputRef.nativeElement.value
    const newIngredient = new Ingredient(ingName, ingAmount)
    this.slService.addIngredient(newIngredient)
  }
}