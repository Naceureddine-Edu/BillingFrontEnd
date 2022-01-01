import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment';
import { customer } from '../_models/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillingService {

  constructor(private http: HttpClient) { }

    // Methode qui permet de retourner une facture(BILL) depuis le microservice billing-service
    getBill()
    {
        return this.http.get(`${environment.apiUrlBilling}/fullBill/1`);
    }

}
