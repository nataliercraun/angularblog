import { Component, OnInit, ViewChild } from '@angular/core';
import { Recipe } from './_models/recipe.model';
import { ElementFinder } from 'protractor';
import { Recipes } from '@mocks/Recipes';
import { Router } from '@angular/router';
import { RecipeTypes } from './_constants/recipe.constants';
import { BehaviorSubject } from 'rxjs';
import * as _ from 'lodash';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})

export class FoodComponent implements OnInit {

  @ViewChild('recipeTiles', {static: false}) recipeTiles: ElementFinder;

  selectedValue = RecipeTypes.DESSERT;
  savorySelected = false;
  drinksSelected = false;
  dessertsSelected = false;

  private recipeSubject = new BehaviorSubject<Recipe[]>([]);
  $recipes = this.recipeSubject.asObservable();
  originalRecipeList: Recipe[];
  dislayRecipes: Recipe[];

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    this.originalRecipeList = Recipes;
    this.$recipes.subscribe((recipes) => {
      this.dislayRecipes = recipes;
    });
    this.updateRecipes(Recipes);
  }

  updateRecipes(recipes: Recipe[]) {
    this.recipeSubject.next(recipes);
  }

  typeSelected(recipeType: number) {
    switch (recipeType) {
      case 1:
        return this.drinksSelected;
      case 2:
        return this.savorySelected;
      case 3:
        return this.dessertsSelected;
    }
  }

  selectionChanged(item) {
    const updatedRecipes = _.filter(this.originalRecipeList, (recipe: Recipe) => {
      return recipe.type === item.value;
    });
    this.updateRecipes(updatedRecipes);
  }

  viewRecipe(item) {
    window.location = item.content;
  }

}
