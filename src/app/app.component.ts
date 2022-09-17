import {Component} from '@angular/core';
import {faker} from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  randomText: string = faker.lorem.sentence();
  enteredText: string = '';

  onInput(event: any) {
    this.enteredText = event.target.value;
  }

  detectColor(letter: string, enterTextElement: string): string {
    if(!enterTextElement)
    {
      return 'pending'
    }
    if (letter === enterTextElement) {
      return 'success-color'
    } else {
      return 'alert-color';
    }

  }
}
