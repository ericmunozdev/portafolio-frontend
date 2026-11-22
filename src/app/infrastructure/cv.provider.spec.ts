import { provideHttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { CVRepository } from '../core/ports/cv.repository';
import { CVApiRepository } from './cv-api.repository';
import { CVFallbackRepository } from './cv-fallback.repository';
import { CVJsonRepository } from './cv-json.repository';
import { provideCVRepository } from './cv.provider';
import { RuntimeConfig, type CVDataSource } from './runtime-config';

describe('provideCVRepository', () => {
  afterEach(() => TestBed.resetTestingModule());

  function resolve(dataSource: CVDataSource): CVRepository {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideCVRepository()],
    });
    TestBed.inject(RuntimeConfig).value = { dataSource, apiUrl: 'https://api.test' };

    return TestBed.inject(CVRepository);
  }

  it('resuelve el adaptador JSON', () => {
    expect(resolve('json')).toBeInstanceOf(CVJsonRepository);
  });

  it('resuelve el adaptador API', () => {
    expect(resolve('api')).toBeInstanceOf(CVApiRepository);
  });

  it('resuelve el adaptador con fallback', () => {
    expect(resolve('fallback')).toBeInstanceOf(CVFallbackRepository);
  });
});
