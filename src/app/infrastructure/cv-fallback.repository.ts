import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, timeout } from 'rxjs';
import type { iCV } from '../core/domain/cv.model';
import { CVRepository } from '../core/ports/cv.repository';
import { CVApiRepository } from './cv-api.repository';
import { CVJsonRepository } from './cv-json.repository';

@Injectable()
export class CVFallbackRepository extends CVRepository {
  private readonly api = inject(CVApiRepository);
  private readonly json = inject(CVJsonRepository);

  override getCV(): Observable<iCV> {
    return this.api.getCV().pipe(
      timeout(5000),
      catchError((error: unknown) => {
        console.warn('[CV] Falló la API; se usa el JSON local.', describeError(error));
        return this.json.getCV();
      }),
    );
  }
}

function describeError(error: unknown): string {
  if (error instanceof HttpErrorResponse) {
    return `${error.status} ${error.statusText} — ${error.url ?? 'sin URL'}`;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return String(error);
}
