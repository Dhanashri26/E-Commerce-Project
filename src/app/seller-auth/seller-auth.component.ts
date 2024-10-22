import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SellerService } from '../../services/seller.service';



@Component({
  selector: 'app-seller-auth',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.scss'
})




export class SellerAuthComponent implements OnInit {
  constructor(private http: HttpClient, private seller: SellerService) { }




  ngOnInit(): void { }

  signUp(data : object):void {
    console.log(data);
    this.seller.userSignup(data).subscribe((result) => {
      console.log(result);

    });
  }

  

}
