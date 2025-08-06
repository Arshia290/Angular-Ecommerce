import { Component, signal } from '@angular/core';
import { Product } from '../../models/products.models';
import { ProductCard } from './product-card/product-card';

@Component({
  selector: 'app-products-list',
  imports: [ProductCard],
  template: `
  <div class="p-8 grid grid-cols-2 gap-4">
    @for (product of products(); track product.id) {
      <app-product-card [product]="product" />
    }
  </div>
  `,
  styles: ``
})
export class ProductsList {

  products = signal<Product[]>([]);

  async ngOnInit() {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    this.products.set(data);
  }
}
