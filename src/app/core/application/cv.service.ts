import { Injectable, inject, signal } from '@angular/core';
import type { iCV } from '../domain/cv.model';
import { CVRepository } from '../ports/cv.repository';

@Injectable({ providedIn: 'root' })
export class CVService {
  private readonly repository = inject(CVRepository);

  private readonly _cv = signal<iCV | null>(null);
  private readonly _error = signal<string | null>(null);
  private readonly _isLoading = signal(true);

  readonly cv = this._cv.asReadonly();
  readonly error = this._error.asReadonly();
  readonly isLoading = this._isLoading.asReadonly();

  constructor() {
    this.loadCV();
  }

  private loadCV(): void {
    this.repository.getCV().subscribe({
      next: (data) => {
        this._cv.set(data);
        this._error.set(null);
        this._isLoading.set(false);
      },
      error: () => {
        this._error.set('No se pudo cargar el CV');
        this._isLoading.set(false);
      },
    });
  }
}
