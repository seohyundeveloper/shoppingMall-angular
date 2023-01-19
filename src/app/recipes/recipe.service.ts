import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>(); // 레시피 데이터의 일부를 보유함 

  private recipes:Recipe[] = [
    new Recipe( 'A Test Recipe',
                'This is simply a test.', 
                'https://assets.epicurious.com/photos/555b5db3644d45515b757513/1:1/w_2240,c_limit/56389541_pasta-alla-gricia_1x1.jpg'),
    new Recipe('My Favorite Recipe',
               'This is one of the popular food.',
               'https://assets.epicurious.com/photos/61f8150ca2bbc00670179f64/1:1/w_640,c_limit/CacciatoreBakedPasta_RECIPE_IG_012322_26052_VOG_final.jpg')
  ];

  getRecipes(){
    return this.recipes.slice(); // 똑같은 복사본인 새배열을 반환함.
  }
}