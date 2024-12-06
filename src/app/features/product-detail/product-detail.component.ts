import { Component, effect, inject, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CartStateService } from '../../core/services/cart-state.service';
import { ProductDetailSateService } from '../../core/services/product-detail-state.service';


@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-detail.component.html',
  providers: [ProductDetailSateService],
})
export default class ProductDetailComponent {
  productDetailState = inject(ProductDetailSateService).state;
  cartState = inject(CartStateService).state;

  id = input.required<string>();

  constructor() {
    effect(() => {
      this.productDetailState.getById(this.id());
    });
  }

  addToCart() {
    this.cartState.add({
      product: this.productDetailState.product()! ,
      quantity: 1,
    });
  }
}
