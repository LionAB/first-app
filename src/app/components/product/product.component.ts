import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Product } from 'src/types';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService } from 'primeng/api';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  standalone: true,
  imports: [RatingModule,FormsModule,ButtonModule,ToastModule,ConfirmPopupModule],
  providers:[ConfirmationService]
})
export class ProductComponent {
  constructor(private confirmationService: ConfirmationService) { }
  @ViewChild('deleteButton') deleteButton: any;
  @Input() product!:Product;
  @Output() delete: EventEmitter<Product> =new EventEmitter<Product>();
  @Output() edit: EventEmitter<Product> =new EventEmitter<Product>();

  confirmDelete() {
    this.confirmationService.confirm({
      target: this.deleteButton.nativeElement,
      message: 'Are you sure that you want to delete this product?',
      accept: () => {
        this.deleteProduct();
      },
    });
  }

  editProduct(){
    this.edit.emit(this.product)
  }
  deleteProduct(){
    this.delete.emit(this.product)
  }
}
