import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import type { iCV } from '../core/domain/cv.model';
import { CVRepository } from '../core/ports/cv.repository';
import { CV_API_URL } from './cv-api-url.token';

@Injectable()
export class CVApiRepository extends CVRepository {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = inject(CV_API_URL);

  override getCV(): Observable<iCV> {
    return this.http.get<iCV>(this.apiUrl).pipe(
      map((cv) => {
        if (!cv?.profile?.webTitle) {
          throw new Error('La API devolvió un CV con un formato inesperado');
        }
        return cv;
      }),
    );
  }
}
