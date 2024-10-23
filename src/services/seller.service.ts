import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUp } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http:HttpClient) { }


  //here we are passing signup data using interface signup
  
  userSignup(data:SignUp) {
    // console.warn("services called");
    return this.http.post('http://localhost:3000/seller', data)
  }
}
