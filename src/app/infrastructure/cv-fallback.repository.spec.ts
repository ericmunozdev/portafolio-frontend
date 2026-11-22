import { TestBed } from '@angular/core/testing';
import { firstValueFrom, of, throwError } from 'rxjs';
import { CVFallbackRepository } from './cv-fallback.repository';
import { CVApiRepository } from './cv-api.repository';
import { CVJsonRepository } from './cv-json.repository';
import { CV_FIXTURE } from '../../testing/fixtures/cv.fixture';

describe('CVFallbackRepository', () => {
  afterEach(() => {
    vi.restoreAllMocks();
    TestBed.resetTestingModule();
  });

  it('cae al JSON cuando la API falla', async () => {
    vi.spyOn(console, 'warn').mockImplementation(() => undefined);

    TestBed.configureTestingModule({
      providers: [
        CVFallbackRepository,
        {
          provide: CVApiRepository,
          useValue: { getCV: () => throwError(() => new Error('boom')) },
        },
        { provide: CVJsonRepository, useValue: { getCV: () => of(CV_FIXTURE) } },
      ],
    });

    const result = await firstValueFrom(TestBed.inject(CVFallbackRepository).getCV());

    expect(result).toEqual(CV_FIXTURE);
  });

  it('usa la API y no consulta el JSON cuando la API responde', async () => {
    const json = { getCV: vi.fn(() => of(CV_FIXTURE)) };

    TestBed.configureTestingModule({
      providers: [
        CVFallbackRepository,
        { provide: CVApiRepository, useValue: { getCV: () => of(CV_FIXTURE) } },
        { provide: CVJsonRepository, useValue: json },
      ],
    });

    const result = await firstValueFrom(TestBed.inject(CVFallbackRepository).getCV());

    expect(result).toEqual(CV_FIXTURE);
    expect(json.getCV).not.toHaveBeenCalled();
  });
});
