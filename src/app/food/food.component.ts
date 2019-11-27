import { Component, OnInit, EventEmitter, Output, AfterViewInit, ViewChild, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { MatButtonToggleChange, MatGridTile } from '@angular/material';
import { Recipe } from './interfaces';
import { ElementFinder } from 'protractor';
import { Recipes } from '../../assets/mocks/Recipes';
import { Router } from '@angular/router';

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

  typeSelected(recipeType: string) {
    switch (recipeType) {
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

    console.log('recipe is: ' + item.content);
    window.location = item.content;
  }

}
