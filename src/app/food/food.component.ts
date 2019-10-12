import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material';

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

  constructor() { }

  ngOnInit() {
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

}
