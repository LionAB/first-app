import { Component, ViewChild } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product, Products } from 'src/types';
import { ProductComponent } from '../components/product/product.component';
import { CommonModule } from '@angular/common';
import { Paginator, PaginatorModule } from 'primeng/paginator';
import { EditPopoupComponent } from '../components/edit-popoup/edit-popoup.component';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-home',
  standalone:true,
  imports:[ButtonModule,CommonModule,PaginatorModule,ProductComponent,EditPopoupComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  constructor(private productsService:ProductsService) { }
  @ViewChild('paginator') paginator: Paginator | undefined;

  products:Product[] = [];
  selectedProduct:Product={
    id:0,
    name:'',
    image:'',
    price:'',
    rating:0, 
  }
  totalRecords:number=0;
  rows:number=5;  
  displayEditPopup:boolean=false;
  displayAddPopup:boolean=false;
  toggleEditPopup(product:Product){
    this.selectedProduct=product;
    this.displayEditPopup=true;
  }
  toggleAddPopup(){
    this.displayAddPopup=true;
  }
  togggleDeletePopup(product:Product){
    if (!product.id) {
      return;
    }
    this.deleteProduct(product.id);
  }
  onConfirmEdit(product:Product){
    if(!this.selectedProduct.id){
      return;
    }
    this.editProduct(product,this.selectedProduct.id)
    this.displayEditPopup=false;
  }
  onConfirmAdd(product:Product){
    this.addProduct(product)
    this.displayAddPopup=false;
  }
  onProductOutput(product:Product){
    console.log(product)
  }
  onPageChange(event:any){
    console.log(event.page)
    this.fetchProducts(event.page,event.rows)
  }
  resetPaginator() {
    this.paginator?.changePage(0);
  }

  fetchProducts(page:number,perPage:number){
    this.productsService
    .getProducts('http://localhost:3000/clothes',{page:page , perPage:perPage})
    .subscribe((products: Products)=>{
      console.log(products.items)
      this.products=products.items;
      this.totalRecords=products.total;
    })
  }


  editProduct(product: Product, id: number) {
    this.productsService
      .editProduct(`http://localhost:3000/clothes/${id}`, product)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.fetchProducts(0, this.rows);
          this.resetPaginator();
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  deleteProduct(id: number) {
    this.productsService
      .deleteProduct(`http://localhost:3000/clothes/${id}`)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.fetchProducts(0, this.rows);
          this.resetPaginator();
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  addProduct(product: Product) {
    this.productsService
      .addProduct(`http://localhost:3000/clothes`, product)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.fetchProducts(0, this.rows);
          this.resetPaginator();
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
  ngOnInit(): void {
  this.fetchProducts(1,5)
  }
}
