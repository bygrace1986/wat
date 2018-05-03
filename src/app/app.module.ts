import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestModule } from './test/test.module';
import { TestDependency, TEST_DEPENDENCY } from './test/test.service';

const dependency = {
  property: 'value'
} as TestDependency;
const dependencyCopy = { id: 1, name: 'first', ...dependency };
dependencyCopy.name = 'last';
console.log('[AppModule]', dependencyCopy);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TestModule.forRoot(dependencyCopy)
  ],
  providers: [
    //{ provide: TEST_DEPENDENCY, useValue: dependencyCopy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
