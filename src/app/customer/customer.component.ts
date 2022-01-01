import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { customer } from '../_models/customer';
import { CustomerService } from '../_services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  title = 'billing-service-frontend';
  customers;

  constructor(private http: HttpClient, private customerService: CustomerService) { }

  ngOnInit() : void
  {
    this.customerService.getAllCustomers().subscribe(
        data =>
        {
           this.customers = data;
        },
        err =>
        {
            console.log(err.message);
        });
  }

}
