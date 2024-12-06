import { Injectable, inject } from '@angular/core';
import { signalSlice } from 'ngxtension/signal-slice';
import { Observable, map, switchMap } from 'rxjs';
import { ProductsService } from './product.service';
import { Product } from './product.interface';

interface State {
  product: Product | null;
  status: 'loading' | 'success' | 'error';
}

@Injectable()
export class ProductDetailSateService {
  private productsService = inject(ProductsService);

  private initialState: State = {
    product: null,
    status: 'loading' as const,
  };

  state = signalSlice({
    initialState: this.initialState,
    actionSources: {
      getById: (_state, $: Observable<string>) =>
        $.pipe(
          switchMap((id) => this.productsService.getProduct(id)),
          map((data) => ({ product: data, status: 'success' as const })),
        ),
    },
  });
}
