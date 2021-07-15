import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photograph } from '../interface';

@Injectable()
export class PhotographService {
  constructor(public http: HttpClient) {}

  getPhotograph(): Observable<Photograph[]> {
    return this.http.get<Photograph[]>('/api/photographers');
  }
}
