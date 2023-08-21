import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from '../interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  registerUser(formData: any){
    return this.httpClient.post<Iuser>('http://localhost:3006/register', formData);
  }

  loginUser(formData: any){
    return this.httpClient.post<Iuser>('http://localhost:3006/login', formData);
  }

  getUserData(){
    let data = localStorage.getItem('currentUser');
    return data ? JSON.parse(data) : null; //JSON.parse converts string to an object
  }

  isAuthenticated(){
    //if it is not null- return true, if it is null-return false
    return (this.getUserData() !== null) ? true : false;
  }


}
