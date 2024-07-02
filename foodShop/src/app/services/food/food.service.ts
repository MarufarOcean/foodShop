import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll():String[]{
    return[
      '/Images/food/food1',
      '/Images/food/food2',
      '/Images/food/food3'
    ]
  }
}
