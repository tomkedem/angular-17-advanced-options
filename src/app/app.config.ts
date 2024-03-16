import { ApplicationConfig , ErrorHandler } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';

import { routes } from './app.routes';
import { GlobalErrorHandler } from './shared/Errors/global-error-handler';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { loggerInterceptor } from './shared/Inrerceptors/logger.interceptor';
import { errorInterceptor } from './shared/Inrerceptors/error.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    {
      provide: ErrorHandler, // Use ErrorHandler as the token
      useClass: GlobalErrorHandler
    },
    provideHttpClient(withInterceptors([
      loggerInterceptor,
      errorInterceptor
    ]))
  ],
};
