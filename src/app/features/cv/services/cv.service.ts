import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iCV } from '../interfaces/cv.interface';

@Injectable({ providedIn: 'root' })
export class CVService {

  private http = inject(HttpClient);

  private _cv = signal<iCV | null>(null);

  cv = this._cv.asReadonly();

  constructor() {
    this.loadCV();
  }

  private loadCV() {
    this.http.get<iCV>('assets/data/cv.json')
    .subscribe(data => this._cv.set(data));
  }
}
