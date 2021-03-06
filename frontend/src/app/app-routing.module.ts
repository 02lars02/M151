import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NewProductComponent } from './new-product/new-product.component';

const routes: Routes = [
  { path: '', component: OverviewComponent },
  { path: 'product/:id', component: DetailComponent },
  { path: 'productAdd', component: NewProductComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
