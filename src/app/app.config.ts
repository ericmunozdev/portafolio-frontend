import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideCVRepository } from './infrastructure/cv.provider';
import { provideRuntimeConfig } from './infrastructure/runtime-config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    provideRuntimeConfig(),
    provideCVRepository(),
    provideRouter(routes),
  ],
};
