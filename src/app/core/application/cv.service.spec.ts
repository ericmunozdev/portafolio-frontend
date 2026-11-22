import { TestBed } from '@angular/core/testing';
import { throwError } from 'rxjs';
import { CVRepository } from '../ports/cv.repository';
import { CVInMemoryRepository } from '../../../testing/cv-in-memory.repository';
import { CV_FIXTURE } from '../../../testing/fixtures/cv.fixture';
import { CVService } from './cv.service';

describe('CVService', () => {
  afterEach(() => TestBed.resetTestingModule());

  it('expone el CV del repositorio en memoria sin HttpClient', () => {
    TestBed.configureTestingModule({
      providers: [
        CVService,
        { provide: CVRepository, useValue: new CVInMemoryRepository(CV_FIXTURE) },
      ],
    });

    const service = TestBed.inject(CVService);

    expect(service.cv()).toEqual(CV_FIXTURE);
    expect(service.isLoading()).toBe(false);
    expect(service.error()).toBeNull();
  });

  it('registra el error y termina la carga si el repositorio falla', () => {
    TestBed.configureTestingModule({
      providers: [
        CVService,
        { provide: CVRepository, useValue: { getCV: () => throwError(() => new Error('boom')) } },
      ],
    });

    const service = TestBed.inject(CVService);

    expect(service.cv()).toBeNull();
    expect(service.isLoading()).toBe(false);
    expect(service.error()).toBe('No se pudo cargar el CV');
  });
});
