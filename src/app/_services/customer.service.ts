import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment';
import { customer } from '../_models/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

    // Methode qui permet de retourner tous les customers depuis le microservice customer-service
    getAllCustomers()
    {
        return this.http.get(`${environment.apiUrlCustomer}/customers`);
    }
}
