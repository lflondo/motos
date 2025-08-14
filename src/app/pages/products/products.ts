import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product_models';
import { Products } from '../../services/products';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class ProductosClass implements OnInit{
  productos : Product[] = []
  constructor(private product:Products){

  }
  ngOnInit(): void {
      this.productos = this.product.getProducts();
  }
}
