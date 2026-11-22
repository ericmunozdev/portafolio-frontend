import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import type { iCV } from '../core/domain/cv.model';
import { CVRepository } from '../core/ports/cv.repository';

@Injectable()
export class CVJsonRepository extends CVRepository {
  private readonly http = inject(HttpClient);

  override getCV(): Observable<iCV> {
    return this.http.get<iCV>('assets/data/cv.json');
  }
}
