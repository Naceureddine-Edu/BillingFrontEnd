import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment';
import { customer } from '../_models/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http: HttpClient) { }

    // Methode qui permet de retourner tous les produits depuis le microservice inventory-service
    getAllProducts()
    {
        return this.http.get(`${environment.apiUrlInventory}/products`);
    }
}
