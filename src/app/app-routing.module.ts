import { CategoryComponent } from './components/category/category.component';
import { AllItemsComponent } from './components/all-items/all-items.component';
import { OfferMeDetailsComponent } from './components/offer-me-details/offer-me-details.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { NotificationComponent } from './components/notification/notification.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { HomeComponent } from './components/home/home.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ItemComponent } from './components/item/item.component';

import {CreateAdvertisementComponent} from './components/create-advertisement/create-advertisement.component';
import { SpecificAddComponent } from './components/specific-add/specific-add.component';

const routes: Routes = [
    
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'signup', component: SignUpComponent},
      { path: 'user', component: UserProfileComponent },
      { path: 'home', component: HomeComponent,children:[
        { path: 'all', component: AllItemsComponent},
        { path: 'category/:categoryId', component:CategoryComponent},
        { path: 'item/:id' , component:ItemComponent}
        ]},
      { path: 'edit', component: UserEditComponent},
      { path: 'notification', component:NotificationComponent},
      { path: 'wishList', component:WishListComponent},
      { path: 'orders', component:OrdersComponent},
      { path: 'help', component:OfferMeDetailsComponent},

    
      { path:'create-advertisement',component:CreateAdvertisementComponent},
      { path:'siguup',component:SignUpComponent},
      {path :'specific-add',component:SpecificAddComponent}
      
    
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }