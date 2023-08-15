import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Irotation } from '../interfaces/irotation';

@Injectable({
  providedIn: 'root'
})
export class RotationplannerService {

  constructor(private http: HttpClient) { }

  getRotationPlanner(){
    return this.http.get<Irotation[]>('http://localhost:3006/rotationplanner');
  }
}
