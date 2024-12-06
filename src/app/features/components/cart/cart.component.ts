import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { CartStateService } from '../../../core/services/cart-state.service';
import { ProductItemCart } from '../../../core/services/product.interface';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartItemComponent, CurrencyPipe],
  templateUrl: './cart.component.html',
  styles: ``,
})
export default class CartComponent {
  state = inject(CartStateService).state;

  onRemove(id: number) {
    this.state.remove(id);
  }

  onIncrease(product: ProductItemCart) {
    this.state.udpate({
      product: product.product,
      quantity: product.quantity + 1,
    });
  }

  onDecrease(product: ProductItemCart) {
    this.state.udpate({
      ...product,
      quantity: product.quantity - 1,
    });
  }
}
