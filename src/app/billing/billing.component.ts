import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BillingService } from '../_services/billing.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {

  bills;

  constructor(private http: HttpClient, private billingService: BillingService) { }

  ngOnInit() : void
  {
    this.billingService.getBill().subscribe(
        data =>
        {
           this.bills = data;
           console.log(data);
        },
        err =>
        {
            console.log(err.message);
        });
  }

}
