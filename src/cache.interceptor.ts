import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/interval';

import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor} from '@angular/common/http';
import {HttpRequest} from '@angular/common/http';
import {Inject, Injectable, InjectionToken, Optional} from '@angular/core';
import {Observable} from 'rxjs/Observable';

export const MAX_AGE_MS = new InjectionToken<string>('maxAgeMs');

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  cache = new Map<string, Observable<HttpEvent<any>>>();

  constructor(@Inject(MAX_AGE_MS) @Optional() public maxAgeMs) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.isCachable(req)) {
      return next.handle(req);
    }

    const cachedResponse = this.cache.get(req.urlWithParams);
    if (cachedResponse) {
      return cachedResponse;
    }

    const obs$ = next.handle(req)
                     .finally(
                         () => Observable.interval(this.maxAgeMs)
                                   .take(1)
                                   .subscribe(() => this.cache.delete(req.urlWithParams)))
                     .publishReplay()
                     .refCount()
                     .catch(err => Observable.throw(err));
    this.cache.set(req.urlWithParams, obs$);

    return obs$;
  }

  private isCachable(req: HttpRequest<any>) {
    return req.method === 'GET' && !req.headers.get('disable-cache');
  }
}

export const CACHE_INTERCEPTOR_PROVIDER = {
  provide: HTTP_INTERCEPTORS,
  useClass: CacheInterceptor,
  multi: true
};
