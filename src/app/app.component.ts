import { Component, VERSION, ViewChild } from '@angular/core';
import { PersonModelExampleOne } from './person.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  model: PersonModelExampleOne;
  constructor() {
    this.model = new PersonModelExampleOne();
    console.log(this.model);
  }

  onSubmitForm() {
    console.log(this.model);
  }
}
