import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CommanService {

  constructor(private snackBar: MatSnackBar) { }

  notificationService(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 6000
    });
  }

  list = [
    {id : 1 ,name : 'Black Pullover' , type :'Men Oversized Sweatshirts' , price : '800' , pic : 'assets/1.jpg'},
    {id : 2 ,name : 'Goffy ' , type :'Men Oversized Sweatshirts' , price : '700' , pic : 'assets/2.jpg'},
    {id : 3 ,name : 'Nostaligia ' , type :'Men Oversized Sweatshirts' , price : '100' , pic : 'assets/3.jpg'},
    {id : 4 ,name : 'OutLaws' , type :'Men Oversized Sweatshirts' , price : '600' , pic : 'assets/4.jpg'},
    {id : 5 ,name : 'Beige Pullover' , type :'Men Oversized Sweatshirts' , price : '1000' , pic : 'assets/5.jpg'},
    {id : 6 ,name : 'Icon lines' , type :'Oversized Pullovers' , price : '1100' , pic : 'assets/6.jpg'},
    {id : 7 ,name : 'Plain White' , type :'Oversized Halfshirt' , price : '1600' , pic : 'assets/7.jpg'},
    {id : 8 ,name : 'Batman' , type :'Oversized Halfshirt' , price : '900' , pic : 'assets/8.jpg'},
    {id : 9 ,name : 'Icon' , type :'Oversized Pullovers' , price : '800' , pic : 'assets/9.jpg'},
    {id : 10 ,name : 'Drift' , type :'Oversized Pullovers' , price : '800' , pic : 'assets/10.jpg'},
    {id : 11 ,name : 'Green pullovers' , type :'Oversized Pullovers' , price : '600' , pic : 'assets/11.jpg'},
    {id : 12 ,name : 'Racing Revolt' , type :'Oversized Pullovers' , price : '700' , pic : 'assets/12.jpg'},
    {id : 13 ,name : 'OutLaw Denim' , type :'Oversized Pullovers' , price : '300' , pic : 'assets/13.jpg'},
    {id : 14 ,name : 'Chill Guy' , type :'Oversized Pullovers' , price : '1000' , pic : 'assets/14.jpg'},
    {id : 15 ,name : 'Goffy Denim' , type :'Oversized Pullovers' , price : '400' , pic : 'assets/15.jpg'},
    {id : 16 ,name : 'Garfield' , type :'Oversized Pullovers' , price : '500' , pic : 'assets/16.jpg'},
    {id : 17 ,name : 'Orange Hoddiee' , type :'Oversized Hoodie' , price : '600' , pic : 'assets/17.jpg'},
    {id : 18 ,name : 'Snoop Dog' , type :'Oversized Halfshirt' , price : '700' , pic : 'assets/18.jpg'},
    {id : 19,name : 'Nasa' , type :'Oversized Pullovers' , price : '800' , pic : 'assets/19.jpg'},
    {id : 20 ,name : 'Brain Wash' , type :'Oversized Halfshirt' , price : '900' , pic : 'assets/20.jpg'},
    {id : 21 ,name : 'Future Garfield' , type :'Oversized Halfshirt' , price : '300' , pic : 'assets/21.jpg'},
    {id : 22 ,name : 'Biege Baggy' , type :'Oversized Halfshirt' , price : '1000' , pic : 'assets/22.jpg'},
    {id : 23,name : 'Loki' , type :'Oversized Halfshirt' , price : '400' , pic : 'assets/23.jpg'},
    {id : 24,name : 'Being Human' , type :'Oversized Halfshirt' , price : '500' , pic : 'assets/24.jpg'},
    {id : 25,name : 'We Are Venom' , type :'Oversized Halfshirt' , price : '600' , pic : 'assets/25.jpg'},
    {id : 26,name : 'Avengers' , type :'Oversized Halfshirt' , price : '800' , pic : 'assets/26.jpg'},
  ]

  getProducts(){
    const max = this.list.reduce((prev , curr) => +curr.price > +prev.price  ? curr : prev )
    const min = this.list.reduce((prev , curr) => +curr.price < +prev.price  ? curr : prev )
    return {data : this.list, max : max.price , min : min.price , status : 200}
  }

  filterProduct(min : string, max:string){
    const filteredData : any =  this.list.filter( item => +item.price <= +max && +item.price >=  +min)
      if (filteredData.length > 0) {
        return { statusCode: 200, data: filteredData };
      } else {
        return { statusCode: 404, message:'No Record Found'};
      }
  }
}
