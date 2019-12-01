import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Recipe } from './_models/recipe.model';
import { ElementFinder } from 'protractor';
import { Recipes } from '@mocks/Recipes';
import { Router } from '@angular/router';
import { RecipeTypes } from './_constants/recipe.constants';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})

export class FoodComponent implements OnInit, AfterViewInit {

  @ViewChild('recipeTiles', {static: false}) recipeTiles: ElementFinder;

  selectedValue = RecipeTypes.DESSERT;
  savorySelected = false;
  drinksSelected = false;
  dessertsSelected = false;

  private recipeSubject = new BehaviorSubject<Recipe[]>([]);
  $recipes = this.recipeSubject.asObservable();

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    this.updateRecipes(Recipes);
  }

  ngAfterViewInit(): void {

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
    if (item.value === RecipeTypes.SAVORY) {
      // _.filter(this.recipes)
      this.savorySelected = true;
      this.dessertsSelected = false;
      this.drinksSelected = false;
    } else if (item.value === RecipeTypes.DESSERT) {
      this.dessertsSelected = true;
      this.savorySelected = false;
      this.drinksSelected = false;
    } else {
      this.drinksSelected = true;
      this.savorySelected = false;
      this.dessertsSelected = false;
    }
  }

  viewRecipe(item) {

    console.log('recipe is: ' + item.content);
    window.location = item.content;
  }

}
