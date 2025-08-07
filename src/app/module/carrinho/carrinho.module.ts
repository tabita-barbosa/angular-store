import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrinhoRoutingModule } from './carrinho-routing-module';
import { CarrinhoComponent } from './carrinho.component';


@NgModule({
  imports: [
    CommonModule,
    CarrinhoRoutingModule
  ]
})
export class CarrinhoModule { }
