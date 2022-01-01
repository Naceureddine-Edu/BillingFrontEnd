import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { product } from '../_models/product';
import { InventoryService } from '../_services/inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  products;

  constructor(private http: HttpClient, private inventoryService: InventoryService) { }

  ngOnInit() : void
  {
    this.inventoryService.getAllProducts().subscribe(
        data =>
        {
           this.products = data;
        },
        err =>
        {
            console.log(err.message);
        });
  }

}
