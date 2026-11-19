import { Observable } from 'rxjs';
import type { iCV } from '../domain/cv.model';

export abstract class CVRepository {
  abstract getCV(): Observable<iCV>;
}
