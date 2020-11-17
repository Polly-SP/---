import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {BuylistComponent} from './buylist/buylist.component';
import {BuyeditComponent} from './buyedit/buyedit.component';
import {BuynewComponent} from './buynew/buynew.component';


const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'buylist', component: BuylistComponent},
  { path: 'editbuy/:id', component: BuyeditComponent},
  { path: 'new', component: BuynewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
