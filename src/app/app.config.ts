import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth-interceptor';
import { retryInterceptor } from './interceptors/retry-interceptor';
import { errorInterceptor } from './interceptors/error-interceptor';
import { provideStore } from '@ngrx/store';
import { myStore } from './state_mgmt/store/store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient(withInterceptors([
        authInterceptor,
        // retryInterceptor
        errorInterceptor
    ])),
    provideStore(myStore)
]
};
