import {ModuleWithProviders, NgModule} from '@angular/core';

import {PREFIX, PREFIX_URL_INTERCEPTOR_PROVIDER} from './prefix-url.interceptor';

@NgModule()
export class PrefixUrlInterceptorModule {
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
