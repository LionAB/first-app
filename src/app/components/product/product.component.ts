import { Component, Input } from '@angular/core';
import { Product } from 'src/types';
import { RatingModule } from 'primeng/rating';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  imports: [RatingModule]
})
export class ProductComponent {
  
  @Input() product!:Product;
}
