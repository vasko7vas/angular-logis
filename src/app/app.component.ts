import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name: string = 'Angular';
  sklad: [ '1', '2' ,'3' ,'4' ,'5' ,'6' ];
  
}
