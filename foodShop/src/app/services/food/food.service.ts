import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';
import { Tag } from '../../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllTags():Tag[]{
    return[
      {name: 'All', count: 3},
      {name: 'Fastfood', count: 2},
      {name: 'Cooked', count: 1},
      {name: 'Lunch', count: 3}
    ]
  }

  getAllFoodsByTag(tag:string): Food[]{
    return tag == "All"? 
    this.getAll() :
    this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAllFoodsBySearchTerm(searchTerm:string):Food[]{
    return this.getAll().filter(food=>food.name.toLowerCase().includes(searchTerm.toLowerCase()));
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
