import { Provider, inject, isDevMode } from '@angular/core';
import { CVRepository } from '../core/ports/cv.repository';
import { CV_API_URL } from './cv-api-url.token';
import { CVApiRepository } from './cv-api.repository';
import { CVFallbackRepository } from './cv-fallback.repository';
import { CVJsonRepository } from './cv-json.repository';
import { RuntimeConfig } from './runtime-config';

export function provideCVRepository(): Provider[] {
  return [
    { provide: CV_API_URL, useFactory: () => inject(RuntimeConfig).value.apiUrl },
    CVApiRepository,
    CVJsonRepository,
    CVFallbackRepository,
    {
      provide: CVRepository,
      useFactory: () => {
        let repository: CVRepository;

        switch (inject(RuntimeConfig).value.dataSource) {
          case 'api':
            repository = inject(CVApiRepository);
            break;
          case 'fallback':
            repository = inject(CVFallbackRepository);
            break;
          default:
            repository = inject(CVJsonRepository);
        }

        if (isDevMode()) {
          console.info('[CV] Adaptador seleccionado:', repository.constructor.name);
        }

        return repository;
      },
    },
  ];
}
