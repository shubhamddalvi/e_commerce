import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartList :any[] = []
  quantity = 0
  ngOnInit(): void {
   let tempCartList : any = localStorage.getItem('cartList')
   this.cartList = JSON.parse(tempCartList) 
   this.cartList.forEach(element => {
    element.quantity = 1 
   });
   this.quantity = this.cartList.length
  }

  decreaseCount(id : number){
    this.cartList.forEach(element => {
       if(element.id == id && element.quantity != 1){
        element.quantity --
       }   
    });
  }

  increaseCount(id : number){
    this.cartList.forEach(element => {
      if(element.id == id ){
      console.log("here");
       element.quantity ++
      }   
   });
  }

  removeFromCart(i : number){
    this.cartList.splice(i,1)
    localStorage.setItem('cartList' , JSON.stringify(this.cartList))
    let addedToFav : any[] = JSON.parse(localStorage.getItem('addedTocart')!) 
    console.log(addedToFav);
    
    addedToFav.splice(i,1)
    localStorage.setItem('addedTocart',JSON.stringify(addedToFav) )
  }
 
}
