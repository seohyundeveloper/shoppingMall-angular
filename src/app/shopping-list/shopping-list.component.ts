import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  // ingredients:Ingredient[] = [
  //   new Ingredient('Apple', 5),
  //   new Ingredient('Tomato', 10)
  // ];
  ingredients:Ingredient[];
  private igChangeSub: Subscription;
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients(); 
    //여기서 재료를 할당해준다.
    // 재료를 가져옴과 동시에 쇼핑 리스트 서비스에 접촉하여 
    // ingredientChanged를 구독해준다.
   this.igChangeSub =  this.slService.ingredientChanged
                          .subscribe(
                            (ingredients: Ingredient[])=> {
                              this.ingredients = ingredients; //구독한 재료를 넣어준다.
                            }
                          )
  }
  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }
  // onIngredientAdded(ingredient: Ingredient) {
  //   console.log(ingredient);
  //   this.ingredients.push(ingredient);
  // }
}
