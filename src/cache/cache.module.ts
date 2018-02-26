import {ModuleWithProviders, NgModule} from '@angular/core';
import {CACHE_INTERCEPTOR_PROVIDER, MAX_AGE_MS} from './cache.interceptor';

@NgModule()
export class CacheInterceptorModule {
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
