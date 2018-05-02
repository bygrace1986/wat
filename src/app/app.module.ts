import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestModule } from './test/test.module';
import { TestDependency } from './test/test.service';

const dependency = {
  property: 'value'
} as TestDependency;
console.log('[AppModule]', dependency);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TestModule.forRoot(dependency)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
