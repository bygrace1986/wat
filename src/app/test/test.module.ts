import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestDependency, TEST_DEPENDENCY, TestService } from './test.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class TestModule {
  static forRoot(dependency?: TestDependency): ModuleWithProviders {
    return {
      ngModule: TestModule,
      providers: [
        TestService,
        { provide: TEST_DEPENDENCY, useValue: dependency }
      ]
    }
  }
}
