import {InjectionToken, ModuleWithProviders, NgModule} from '@angular/core';
import {CACHE_INTERCEPTOR_PROVIDER, MAX_AGE_MS} from './cache.interceptor';

@NgModule()
export class CacheInterceptorModule {
  /**
   * maxAgeMs InjectionToken
   */
  static maxAgeMs = MAX_AGE_MS;

  /**
   * Cache all HTTP `GET` requests.
   */
  static forRoot(maxAgeMs: number): ModuleWithProviders {
    return {
      ngModule: CacheInterceptorModule,
      providers: [CACHE_INTERCEPTOR_PROVIDER, {provide: MAX_AGE_MS, useValue: maxAgeMs}]
    };
  }
}
