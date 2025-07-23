import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { ProductsList } from './pages/products-list/products-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, ProductsList],
  template: `
    <app-header></app-header>
    <app-products-list></app-products-list>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class App {
  title = signal('E-commerce App');
}
