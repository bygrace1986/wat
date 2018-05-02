import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestModule } from './test/test.module';
import { TestDependency } from './test/test.service';

const dependency = {
  property: 'value'
} as TestDependency;
const dependencyCopy = { ...dependency };
console.log('[AppModule]', dependencyCopy);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TestModule.forRoot(dependencyCopy)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
