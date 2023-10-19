
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
productList:any[]=[];
  constructor(private ProductService: ProductService) {

   }
   
   loadAllProducts(){
    this.ProductService.getAllProducts().subscribe((result)=>{
    
      console.log(result);
    })
   }

  ngOnInit(): void {
    this.loadAllProducts();
  }

}
