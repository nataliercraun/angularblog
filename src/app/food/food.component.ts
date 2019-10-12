import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material';
import { Recipe } from './interfaces';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})

export class FoodComponent implements OnInit {

  selectedValue = 'drinks';
  drinks = 'drinks';
  savory = 'savory';
  desserts = 'desserts';
  savorySelected = false;
  drinksSelected = false;
  dessertsSelected = false;

  recipes: Recipe[] = [];

  constructor() {
  }

  ngOnInit() {
    const recipe = {
      name: '',
      content: '',
      picture: '',
      type: 'savory'
    }
    this.recipes.push(recipe);
  }

  typeSelected(recipeType: string) {
    switch(recipeType) {
      case 'savory':
        return this.savorySelected;
      case 'dessert':
        return this.dessertsSelected;
      case 'drink':
        return this.drinksSelected;
    }
  }

  selectionChanged(item) {
    if (item.value === 'savory') {
      this.savorySelected = true;
      this.dessertsSelected = false;
      this.drinksSelected = false;
    } else if (item.value === 'desserts') {
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
    console.log('recipe is: ' + item.value);
  }

}
