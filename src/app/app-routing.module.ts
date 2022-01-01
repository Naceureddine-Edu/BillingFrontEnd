import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { InventoryComponent } from './inventory/inventory.component';
import { BillingComponent } from './billing/billing.component';


const routes: Routes = [
  {
    path: 'customer',
    component: CustomerComponent
  },
  {
    path: 'inventory',
    component: InventoryComponent
  },
  {
    path: 'billing',
    component: BillingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
