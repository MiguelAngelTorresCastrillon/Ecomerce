import { Component, inject } from '@angular/core';
import { ProductsSateService } from '../../core/services/product-state.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CartStateService } from '../../core/services/cart-state.service';
import { Product } from '../../core/services/product.interface';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  providers: [ProductsSateService],
})
export default class ProductListComponent {
  productsState = inject(ProductsSateService);
  cartState = inject(CartStateService).state;

  changePage() {
    const page = this.productsState.state.page() + 1;
    this.productsState.changePage$.next(page);
  }

  addToCart(product: Product) {
    this.cartState.add({
      product,
      quantity: 1,
    });
  }
}