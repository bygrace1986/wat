import { Component } from '@angular/core';

import { TestService } from './test/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(testService: TestService) {
  }
}
