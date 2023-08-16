import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Igallery } from '../interfaces/igallery';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http: HttpClient) { }

  getGallery() {
    return this.http.get<Igallery[]>('http://localhost:3006/gallery');
  } //now injecting service into gallery.component.ts


}
