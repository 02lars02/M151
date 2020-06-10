import { Component, OnInit } from '@angular/core';
import { Product } from 'src/model/Product';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from 'src/model/User';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  add() {
    const product = new Product();
    product.name = (document.getElementById('name') as HTMLInputElement).value;
    product.description = (document.getElementById('description') as HTMLInputElement).value;
    product.price = Number((document.getElementById('price') as HTMLInputElement).value);
    this.request(product).then(() => this.router.navigate(['']));
  }

  async request(product: Product) {
    const user: User = JSON.parse(localStorage.getItem('currentUser'));
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + btoa('' + user.username + ':' + user.password + '')
    });
    await this.http.post('/api/product/add', JSON.stringify(product), {
      headers: header,
    }).subscribe();
  }
}
