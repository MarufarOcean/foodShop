import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllFoodsByTag(tag:string): Food[]{

    return tag == "All"? 
    this.getAll() :
    this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAll():Food[]{
    return[
      
      {
        id:1,
        name: 'Chicken Noodles',
        cookTime: '5',
        price:5,
        favorite: true,
        origins: ['China'],
        stars: 4.8,
        imageUrl:'/Images/food/food1.jpg',
        tags: ['Fastfood','Lunch']
      },
      
      {
        id:2,
        name: 'Fried rice with chicken',
        cookTime: '10',
        price:10,
        favorite: true,
        origins: ['China'],
        stars: 4.8,
        imageUrl:'/Images/food/food2.jpg',
        tags: ['Cooked','Lunch']
      },

      {
        id:3,
        name: 'Prone Noodles',
        cookTime: '15',
        price:15,
        favorite: false,
        origins: ['Thailand'],
        stars: 4.8,
        imageUrl:'/Images/food/food3.jpg',
        tags: ['Fastfood','Lunch']
      }
      
    ]
  }
}
