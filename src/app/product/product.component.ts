import { Component } from '@angular/core';
import { product } from '../model/product';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  price!:number;
  listProduct:product[]=[
    {id:1,title:"product1",price:1000,quantity:100,like:0},
    {id:2,title:"product2",price:5000,quantity:10,like:0},
    {id:3,title:"product3",price:2800,quantity:20,like:0}

  ]
  // increment(id:number){
  //   this.listProduct.forEach (e =>
  //     {
  //       if (e.id=id)
  //       e.quantity++
  //     }
  //   )
  //   console.log(this.listProduct);
  // }
  increment(index:number){
    this.listProduct[index].like++
  }
  decrement(index:number){
    this.listProduct[index].quantity--
    
  }

}
