import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'products'},
  {path : 'products' , component : ProductlistComponent},
  {path : 'cart' , component : CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
