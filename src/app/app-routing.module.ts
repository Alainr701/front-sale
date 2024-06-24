import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(
    [
      { path: 'login', component: LoginComponent },
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: '/login', pathMatch: 'full' }
    ]

  )],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
