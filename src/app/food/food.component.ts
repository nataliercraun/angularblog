import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Recipe } from './_models/recipe.model';
import { ElementFinder } from 'protractor';
import { Recipes } from '../../assets/mocks/Recipes';
import { Router } from '@angular/router';
import { RecipeTypes } from './_constants/recipe.constants';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})

export class FoodComponent implements OnInit, AfterViewInit {

  @ViewChild('recipeTiles', {static: false}) recipeTiles: ElementFinder;

  selectedValue = 'drinks';
  drinks = 'drinks';
  savory = 'savory';
  desserts = 'desserts';
  savorySelected = false;
  drinksSelected = false;
  dessertsSelected = false;

  recipes: Recipe[] = [];

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    this.recipes = Recipes;
  }

  ngAfterViewInit(): void {
    const tiles = this.recipeTiles._element.nativeElement;
    let images = [];
    images = tiles.querySelectorAll('img');
    let i = 0;
    images.forEach(img => {
      img.src = this.recipes[i].picture;
      i++;
    });
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
