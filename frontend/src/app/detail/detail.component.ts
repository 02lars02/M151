import { Component, OnInit } from '@angular/core';
import { Product } from 'src/model/Product';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/model/User';
import { Order } from 'src/model/Order';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  id: string;
  product: Product = new Product();
  isAdmin = false;
  isCustomer = false;

  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params.id;
      this.getProduct();
    });
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user.userGroup === 'CUSTOMER') {
      this.isCustomer = true;
    }
    if (user.userGroup === 'ADMIN') {
      this.isAdmin = true;
    }
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
    product.name = data.name;
    product.price = data.price;
    product.description = data.description;
    return product;
  }

  order() {
    const currentUserString: string = localStorage.getItem('currentUser');
    const user: User = JSON.parse(currentUserString);
    const order: Order = new Order();
    order.userId = user.id;
    order.productId = this.product.id;
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    this.httpClient
      .post('/api/order/add', JSON.stringify(order), {
        headers: header,
      })
      .subscribe((res) => {
        this.router.navigate(['']);
      });
  }

  delete() {
    const user: User = JSON.parse(localStorage.getItem('currentUser'));
    const header = new HttpHeaders({
      Authorization: 'Basic ' + btoa('' + user.username + ':' + user.password + '')
    });
    this.httpClient.get('/api/order/delete/' + this.id, {
      headers: header,
    }).subscribe((res) => {
      this.router.navigate(['']);
    });
  }
}
