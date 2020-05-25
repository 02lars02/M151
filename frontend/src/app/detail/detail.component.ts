import { Component, OnInit } from '@angular/core';
import { Product } from 'src/model/Product';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  id: string;
  product: Product = new Product();

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params.id;
      this.getProduct();
    });
  }

  getProduct() {
    this.requestProductById(this.id).subscribe(
      (data) => {
        this.product = data;
      },
      (err) => {
        console.error(err);
      }
    );
  }

  requestProductById(id: string): Observable<Product> {
    return this.httpClient
      .get(`/api/product/info/${id}`)
      .pipe(map((data) => this.dataAsProduct(data)));
  }

  dataAsProduct(data: any): Product {
    const product = new Product();
    product.id = data.id;
    product.productName = data.name;
    product.price = data.price;
    product.description = data.description;
    return product;
  }
}
