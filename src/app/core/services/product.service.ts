import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.interface';
import { BaseHttpService } from './base-http.service';

const LIMIT = 5;

@Injectable({ providedIn: 'root' })
export class ProductsService extends BaseHttpService {
  getProducts(page: number): Observable<Product[]> {
    return this.http.get<any[]>(`${this.apiUrl}/products`, {
      params: {
        limit: page * LIMIT,
      },
    });
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`);
  }
}