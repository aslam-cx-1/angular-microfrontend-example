import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page1RoutingModule } from './page-1-routing.module';
import { Page1Component } from './page-1.component';


@NgModule({
  declarations: [
    Page1Component
  ],
  imports: [
    CommonModule,
    Page1RoutingModule
  ]
})
export class Page1Module { }
