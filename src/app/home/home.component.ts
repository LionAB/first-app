import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product, Products } from 'src/types';
import { ProductComponent } from '../components/product/product.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private productsService:ProductsService) { }

  products:Product[] = []; 
  ngOnInit(): void {
    this.productsService
    .getProducts('http://localhost:3000/clothes',{page:0 , perPage:5})
    .subscribe((products: Products)=>{
      console.log(products.items)
      this.products=products.items;
    })
  }
}