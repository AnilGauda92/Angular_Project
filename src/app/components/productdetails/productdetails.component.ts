import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  
  selectedProdId:number=0;
  prod:any;

  constructor(private activatedRoute:ActivatedRoute,private http:HttpClient) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.selectedProdId = +params['id'];

      const url=`https://fakestoreapi.com/products/${this.selectedProdId}`;
      this.http.get(url).subscribe(res=>{
        this.prod= res;
      })
    })
  }

}
