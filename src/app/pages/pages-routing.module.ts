import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { authGuard } from '../services/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', 
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'products-list',
    component: ProductListComponent
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent
  },
  {
    path: 'cart',
    canActivate: [authGuard],
    component: CartComponent
  },
  {
    path: 'checkout',
    canActivate: [authGuard],
    component: CheckoutComponent
  },
  {
    path: 'contact-us',
    component: ContactComponent
  },
  {
    path: 'about-us',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
