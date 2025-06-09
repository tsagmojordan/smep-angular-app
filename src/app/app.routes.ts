import { Routes } from '@angular/router';
import {Component} from '@angular/core';
import {LoginComponent} from './component/login/login';
import {Layout} from './component/layout/layout';
import {Dashbord} from './component/dashboard/dashbord';

export const routes: Routes = [
  {
    path: '',redirectTo:'login',pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'',
    component:Layout,
    children:[
      {
        path:'dashboard',
        component:Dashbord
      }
    ]
  }
];
