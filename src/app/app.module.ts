import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestModule } from './test/test.module';
import { TestDependency, TEST_DEPENDENCY } from './test/test.service';

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
    TestModule.forRoot()
  ],
  providers: [
    { provide: TEST_DEPENDENCY, useValue: dependency }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
