import { Component, input, OnInit } from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent implements OnInit{
  //@input()
  foodPageTags?:string[];

  tags?:Tag[];
  constructor(private foodService:FoodService){ }

  ngOnInit(): void {
    if(!this.foodPageTags){
      this.tags = this.foodService.getAllTags();
    }
    
  }

}
