import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
@Input() recipe: Recipe;
// @Output() recipeSelected = new EventEmitter<void>()   //void 의 경우 어떤 정보도 전달하지 않을때 사용
  constructor( private recipeService:RecipeService) { }

  ngOnInit(): void {
  }

  onSelected(){
  //  this.recipeSelected.emit();
  this.recipeService.recipeSelected.emit(this.recipe);
  // 선택된 아이템이자 전달하고자 하는 데이터임.
  }
}
