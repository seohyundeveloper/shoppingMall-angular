import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  //@Input() recipe:Recipe;
  recipe:Recipe;
  id:number;

  constructor( 
    private recipeServive: RecipeService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {  
   // const id = this.router.snapshot.params['id']; //레시피의 id를 처음만 얻을수 있음!
    this.route.params
    .subscribe (
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeServive.getRecipe(this.id);
      }
    )
   }
  onAddToShoppingList() {
    this.recipeServive.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
