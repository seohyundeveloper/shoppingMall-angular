import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";


export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingredient[]>(); // 재료 배열을 방출함.
  private  ingredients:Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 10)
  ];

  getIngredients() {
    return this.ingredients.slice(); // 복사본 
    // return this.ingredients 
    // 복사본만 있어서 add버튼을 눌러도 리스트에 추가되지 않았다.
    // 아래처럼 재료만 반환해주면 리스트에 추가는 된다.
  }

  addIngredient(ingredient : Ingredient){
      this.ingredients.push(ingredient); //재료를 추가해주기
      this.ingredientChanged.emit(this.ingredients.slice()); 
  }
}