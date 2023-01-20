import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  // ingredients:Ingredient[] = [
  //   new Ingredient('Apple', 5),
  //   new Ingredient('Tomato', 10)
  // ];
  ingredients:Ingredient[];
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients(); 
    //여기서 재료를 할당해준다.
  }

  // onIngredientAdded(ingredient: Ingredient) {
  //   console.log(ingredient);
  //   this.ingredients.push(ingredient);
  // }
}
