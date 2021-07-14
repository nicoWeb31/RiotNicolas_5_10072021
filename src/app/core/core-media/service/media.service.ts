import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Media } from '../interface';

@Injectable()
export class MediaService {
  constructor(public http: HttpClient) {}

  getMedia(): Observable<Media[]> {
    return this.http.get<Media[]>('/api/media');
  }
}
