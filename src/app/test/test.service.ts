import { Injectable, InjectionToken, Inject } from '@angular/core';

export interface TestDependency {
    property: string;
}

export const TEST_DEPENDENCY = new InjectionToken<TestDependency>('TEST_DEPENDENCY');

@Injectable()
export class TestService {
    constructor(@Inject(TEST_DEPENDENCY) dependency: TestDependency) {
        console.log('[TestService]', dependency);
    }
}