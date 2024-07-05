import { Component } from '@angular/core';
// import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'foodShop';
  // onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
  //   alert(`Old Value:${$event.oldValue}, 
  //     New Value: ${$event.newValue}, 
  //     Checked Color: ${$event.starRating.checkedcolor}, 
  //     Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  // }
}
