import { Component, EventEmitter, Input,Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import {Dialog, DialogModule} from 'primeng/dialog';
import { RatingModule } from 'primeng/rating';

import { Product } from 'src/types';
@Component({
  selector: 'app-edit-popoup',
  standalone: true,
  imports: [DialogModule,FormsModule,RatingModule,ButtonModule],
  templateUrl: './edit-popoup.component.html',
  styleUrl: './edit-popoup.component.scss'
})
export class EditPopoupComponent {
@Input() display:boolean=false;
@Output() displayChange=new EventEmitter<boolean>();
@Input() header!:string;
@Output() confirm=new EventEmitter<Product>()
@Input() product:Product={
  name:'',
  image:'',
  price:'',
  rating:0,
}
onConfirm(){
  this.confirm.emit(this.product)
  this.display=false;
  this.displayChange.emit(this.display)
};

onCancel(){
this.display=false;
this.displayChange.emit(this.display)
}

}
