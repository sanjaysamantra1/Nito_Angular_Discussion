import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth-interceptor';
import { retryInterceptor } from './interceptors/retry-interceptor';
import { errorInterceptor } from './interceptors/error-interceptor';
import { provideStore } from '@ngrx/store';
import { myStore } from './state_mgmt/store/store';
import { provideEffects } from '@ngrx/effects';
import { EmployeeEffects } from './state_mgmt/effects/employee.effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

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
    provideStore(myStore),
    provideEffects(EmployeeEffects),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
};
