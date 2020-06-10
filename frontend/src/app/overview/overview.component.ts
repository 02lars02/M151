import { Component, OnInit } from '@angular/core';
import { Product } from 'src/model/Product';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
  products: Product[];
  isAdmin = false;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.getProducts().subscribe((products) => (this.products = products));
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user.userGroup === 'ADMIN') {
      this.isAdmin = true;
    }
  }

  private getProducts(): Observable<Product[]> {
    return this.httpClient.get('/api/product/all').pipe(
      map((data) => {
        const products: Product[] = [];
        (data as any[]).forEach((line) => {
          products.push(this.dataToProduct(line));
        });
        return products;
      })
    );
  }

  private dataToProduct(data: any): Product {
    const product = new Product();
    product.id = data.id;
    product.name = data.name;
    product.price = data.price;
    product.description = data.description;
    return product;
  }
}
