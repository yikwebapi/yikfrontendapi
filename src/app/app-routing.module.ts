import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { AddgameComponent } from './addgame/addgame.component';

import { GameComponent } from './game/game.component';
import {CartComponent } from './cart/cart.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
 { path: 'login', component: LoginComponent },
 { path: 'register', component: RegisterComponent },
 { path: 'logout', component: LogoutComponent },
 { path: 'profile', component: ProfileComponent },
 { path: 'addgame', component: AddgameComponent },
 { path: 'game/:id', component: GameComponent },
 { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
