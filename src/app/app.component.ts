import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name: string = 'Storage';
  sklad = [
  {x:1, y:1, pall: 1, newfloor:0}, 
  {x:1, y:2, pall: 0, newfloor:0}, 
  {x:2, y:1,  pall: 2, newfloor:1},
  {x:2, y:2,  pall: 1, newfloor:0}
];

}
