import { Ingredient } from "../shared/ingredient.model";


export class ShoppingListService {
  private  ingredients:Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 10)
  ];

  getIngredients() {
    return this.ingredients.slice(); // 복사본 
  }

  addIngredient(ingredient : Ingredient){
      this.ingredients.push(ingredient); //재료를 추가해주기
  }
}