import {InjectionToken, ModuleWithProviders, NgModule} from '@angular/core';
import {PREFIX, PREFIX_URL_INTERCEPTOR_PROVIDER} from './prefix-url.interceptor';

@NgModule()
export class PrefixUrlInterceptorModule {
  /**
   * Prefix InjectionToken
   */
  static prefix = PREFIX;

  /**
   * Prefix HTTP request urls.
   */
  static forRoot(prefix: string): ModuleWithProviders {
    return {
      ngModule: PrefixUrlInterceptorModule,
      providers: [PREFIX_URL_INTERCEPTOR_PROVIDER, {provide: PREFIX, useValue: prefix}]
    };
  }
}
