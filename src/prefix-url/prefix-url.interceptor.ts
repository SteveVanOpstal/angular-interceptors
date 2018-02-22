import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor} from '@angular/common/http';
import {HttpRequest} from '@angular/common/http';
import {Inject, Injectable, InjectionToken, ModuleWithProviders, NgModule} from '@angular/core';
import {Observable} from 'rxjs/Observable';

export const PREFIX = new InjectionToken<string>('prefix');

@Injectable()
export class PrefixUrlInterceptor implements HttpInterceptor {
  constructor(@Inject(PREFIX) public prefix) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req.clone({url: this.prefix + req.url}));
  }
}

export const PREFIX_URL_INTERCEPTOR_PROVIDER = {
  provide: HTTP_INTERCEPTORS,
  useClass: PrefixUrlInterceptor,
  multi: true
};
