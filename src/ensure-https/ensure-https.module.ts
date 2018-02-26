import {ModuleWithProviders, NgModule} from '@angular/core';
import {ENSURE_HTTPS_INTERCEPTOR_PROVIDER} from './ensure-https.interceptor';

@NgModule()
export class EnsureHttpsInterceptorModule {
  /**
   * Change `http://` to `https://` in HTTP request urls.
   */
  static forRoot(maxAgeMs: number): ModuleWithProviders {
    return {ngModule: EnsureHttpsInterceptorModule, providers: [ENSURE_HTTPS_INTERCEPTOR_PROVIDER]};
  }
}
