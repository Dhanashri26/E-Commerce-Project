import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http:HttpClient) { }

  userSignup(data:any) {
    // console.warn("services called");
    return this.http.post('https://localhost:4200/seller-auth', data)
  }
}
