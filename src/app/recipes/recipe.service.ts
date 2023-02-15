import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>(); // 레시피 데이터의 일부를 보유함 
   private recipes:Recipe[] = [
    new Recipe( 'A Test Recipe',
                'This is simply a test.', 
                'https://assets.epicurious.com/photos/555b5db3644d45515b757513/1:1/w_2240,c_limit/56389541_pasta-alla-gricia_1x1.jpg',
                [
                  new Ingredient ('Meat', 100),
                  new Ingredient ('noddle', 100),
                  new Ingredient ('Tomato', 3)
                ]),
    new Recipe('My Favorite Recipe',
               'This is one of the popular food.',
               'https://assets.epicurious.com/photos/61f8150ca2bbc00670179f64/1:1/w_640,c_limit/CacciatoreBakedPasta_RECIPE_IG_012322_26052_VOG_final.jpg',
               [
                new Ingredient ('cheese', 2),
                new Ingredient ('mashroom', 5)
               ]),
  ];

  constructor(
    private slService: ShoppingListService
  ){

  }
  getRecipes(){
    return this.recipes.slice(); // 똑같은 복사본인 새배열을 반환함.
  }

  getRecipe(index: number){
    return this.recipes[index]; 
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}