import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productArr:any = [];
  constructor(private httpClient:HttpClient) { }
  url='https://fakestoreapi.com/products';
  ngOnInit(): void {
    this.httpClient.get(this.url).subscribe((data)=>{
      this.productArr = data;
    })
  }

}
