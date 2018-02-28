import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor} from '@angular/common/http';
import {HttpRequest} from '@angular/common/http';
import {Injectable, InjectionToken} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class EnsureHttpsInterceptor implements HttpInterceptor {
  cache = new Map<string, Observable<HttpEvent<any>>>();

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req.clone({url: req.url.replace('http://', 'https://')}));
  }
}

export const ENSURE_HTTPS_INTERCEPTOR_PROVIDER = {
  provide: HTTP_INTERCEPTORS,
  useClass: EnsureHttpsInterceptor,
  multi: true
};
