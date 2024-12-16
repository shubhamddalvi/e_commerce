import { Component, OnInit } from '@angular/core';
import { CommanService } from '../service/comman.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  // Variables & objets
  quantity = 0
  liked_products : number[] = []
  cart_products : any[] = []
  min_price = '0'
  max_price = '0'
  static_max_price = '0'
  static_min_price = '0'
  filterSection = true
  productList : {id : number , name: string, pic : string, price : string, type : string}[] = []


  constructor(public commanService : CommanService){}
  ngOnInit(): void {
    this.getAllProducts()  
    
    if(localStorage.getItem('addedTocart') != null){
      this.cart_products = JSON.parse(localStorage.getItem('addedTocart')!)
    }

    if(localStorage.getItem('cartList') != null){
      this.cartList = JSON.parse(localStorage.getItem('cartList')!)
    }  
  }
  
  getAllProducts(){
    let Alldata = this.commanService.getProducts();
    this.productList =   Alldata.data
    this.max_price =  Alldata.max
    this.static_max_price =  Alldata.max
    this.min_price =  Alldata.min 
    this.static_min_price =  Alldata.min   
  }
  
  addToFavourate(id : number){
      if(this.liked_products.includes(id)){
        this.liked_products.splice(this.liked_products.indexOf(id),1)
      }else{
        this.liked_products.push(id)
      }      
  }
  
  cartList : any[] = []
  addToCart(id : number){
    if(this.cart_products.includes(id)){
      this.cart_products.splice(this.cart_products.indexOf(id),1)
      localStorage.setItem('addedTocart',JSON.stringify(this.cart_products))
      this.cartList.forEach((ele,index) => {
        if(ele.id == id){
          this.cartList.splice(index,1)
        }
        console.log("remove",this.cartList);
        localStorage.setItem('cartList' ,JSON.stringify(this.cartList))        
      });
    }else{
      this.cart_products.push(id)
      localStorage.setItem('addedTocart',JSON.stringify(this.cart_products))
      let tempList = this.productList.filter(item => item.id == id);
      this.cartList.push(tempList[0])
      localStorage.setItem('cartList' ,JSON.stringify(this.cartList))       
      console.log("add =>",this.cartList);
    } 
  }

  mobileFilterActive(){
    this.filterSection = !this.filterSection
    window.scroll({ top: 0, behavior: 'smooth' })
  }

  ApplyFilter(){
  let response =  this.commanService.filterProduct(this.min_price,this.max_price);
  if(response.statusCode == 200){
   this.productList = response.data
  }else{
   this.productList = response.data
   this.commanService.notificationService("No products found within the selected price range.","Ok")
  }
  }
}
