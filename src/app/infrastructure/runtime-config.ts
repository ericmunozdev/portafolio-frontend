import { HttpClient } from '@angular/common/http';
import {
  EnvironmentProviders,
  Injectable,
  inject,
  isDevMode,
  provideAppInitializer,
} from '@angular/core';
import { firstValueFrom, timeout } from 'rxjs';

export type CVDataSource = 'json' | 'api' | 'fallback';

export interface AppConfig {
  dataSource: CVDataSource;
  apiUrl: string;
}

export const DEFAULT_APP_CONFIG: AppConfig = { dataSource: 'json', apiUrl: '' };

@Injectable({ providedIn: 'root' })
export class RuntimeConfig {
  value: AppConfig = { ...DEFAULT_APP_CONFIG };
}

export function provideRuntimeConfig(): EnvironmentProviders {
  return provideAppInitializer(async () => {
    const http = inject(HttpClient);
    const config = inject(RuntimeConfig);

    try {
      // El query evita que el navegador reutilice un config.json anterior.
      const loaded = await firstValueFrom(
        http.get<Partial<AppConfig>>(`config.json?v=${Date.now()}`).pipe(timeout(5000)),
      );
      const dataSource: CVDataSource =
        loaded.dataSource === 'api' || loaded.dataSource === 'fallback'
          ? loaded.dataSource
          : 'json';

      config.value = {
        dataSource,
        apiUrl: typeof loaded.apiUrl === 'string' ? loaded.apiUrl : '',
      };

      if (isDevMode()) {
        console.info('[CV] Configuración resuelta:', config.value);
      }
    } catch (error) {
      // Sin config.json válida se mantiene el valor por defecto (JSON local).
      if (isDevMode()) {
        console.warn('[CV] No se pudo leer config.json; se usa JSON local.', error);
      }
    }
  });
}
