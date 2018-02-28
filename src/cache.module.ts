import {InjectionToken, ModuleWithProviders, NgModule} from '@angular/core';
import {CACHE_INTERCEPTOR_PROVIDER, MAX_AGE_MS} from './cache.interceptor';
export {MAX_AGE_MS} from './cache.interceptor';

@NgModule()
export class CacheInterceptorModule {
  /**
   * Cache all HTTP `GET` requests.
   */
  static forRoot(maxAgeMs: number = 5000): ModuleWithProviders {
    return {
      ngModule: CacheInterceptorModule,
      providers: [CACHE_INTERCEPTOR_PROVIDER, {provide: MAX_AGE_MS, useValue: maxAgeMs}]
    };
  }
}
