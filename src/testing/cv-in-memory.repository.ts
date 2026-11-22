import { Observable, of } from 'rxjs';
import type { iCV } from '../app/core/domain/cv.model';
import { CVRepository } from '../app/core/ports/cv.repository';

export class CVInMemoryRepository extends CVRepository {
  constructor(private readonly data: iCV) {
    super();
  }

  override getCV(): Observable<iCV> {
    return of(this.data);
  }
}
