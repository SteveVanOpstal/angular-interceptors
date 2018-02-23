# angular-interceptors
Useful interceptors for [Angular](https://github.com/angular/angular)

## Installation
```bash
npm install angular-interceptors --save
```

## Usage
- [Cache Interceptor](#cache-interceptor)
- [Ensure Https Interceptor](#ensure-https-interceptor)
- [Prefix Url Interceptor](#prefix-url-interceptor)

### Cache Interceptor
Cache all HTTP `GET` requests.
> `GET` requests with a `disable-cache` header will not be cached.

```typescript
import {CacheInterceptorModule} from 'angular-interceptors';

@NgModule({
  imports: [
    CacheInterceptorModule.forRoot(5 * 1000) // Max age in milliseconds. In this case 5 seconds.
  ]
})
```

Example:
```typescript
this.http.get('https://some.url'); // --> https://some.url
this.http.get('https://some.url');

setTimeout(() => { 
  this.http.get('https://some.url'); // --> https://some.url
}, 5001);
```



### Ensure Https Interceptor
Change `http://` to `https://` in HTTP request urls.

```typescript
import {EnsureHttpsInterceptorModule} from 'angular-interceptors';

@NgModule({
  imports: [
    EnsureHttpsInterceptorModule.forRoot()
  ]
})
```

Example:
```typescript
this.http.get('http://some.url');  // --> https://some.url
this.http.get('https://some.url'); // --> https://some.url
```



### Prefix Url Interceptor
Prefix HTTP request urls.

```typescript
import {PrefixUrlInterceptorModule} from 'angular-interceptors';

@NgModule({
  imports: [
    PrefixUrlInterceptorModule.forRoot('https://some.url') // prefix
  ]
})
```

Example:
```typescript
this.http.get('/api/user'); // --> https://some.url/api/user
```
