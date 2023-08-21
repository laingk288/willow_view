import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iadvertise } from '../interfaces/iadvertise';

@Injectable({
  providedIn: 'root'
})
//Establishing all the API calls I want to make to the backend
export class AdvertisementsService {
//inject the HTTP Client service in order to make API calls that we just imported as a module
  constructor(private http: HttpClient) { }
//
//Create Get Advertisements method to make a GET request to the backend to retrieve all Advertisements table data
  getAdvertisements(){
    return this.http.get<Iadvertise[]>('http://localhost:3006/forsale');
    // put [] after Iadvertise to define the nature of the data we're expecting 
  }
  //Now injecting service into forsale.component.ts

  getAdvertisement(adId:any){
    return this.http.get<Iadvertise>(`http://localhost:3006/forsale/${adId}`);
  }

  editAdvertisement(equipmentId:any, advertisementData:any){
    return this.http.patch<Iadvertise>(`http://localhost:3006/forsale/${equipmentId}`, advertisementData);
  }

  createAdvertisement(advertisementData: any){
    return this.http.post<Iadvertise>('http://localhost:3006/forsale', advertisementData);
  }

  deleteAdvertisement(equipment_id: number){
    return this.http.delete<Iadvertise>(`http://localhost:3006/forsale/${equipment_id}`);
  }
} 

