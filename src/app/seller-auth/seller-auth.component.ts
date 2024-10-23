import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SellerService } from '../../services/seller.service';
import { Router } from '@angular/router';
import { SignUp } from '../../data-type';



@Component({
  selector: 'app-seller-auth',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.scss'
})




export class SellerAuthComponent implements OnInit {
  constructor(private http: HttpClient, private seller: SellerService, private router:Router) { }




  ngOnInit(): void { }

  
//here we are passing signup data using interface signup
  signUp(data : SignUp):void {
    console.log(data);
    this.seller.userSignup(data).subscribe((result) => {
      // console.log(result);
      if(result){
        this.router.navigate(['seller-home']);
      }

    });
  }

  

}
