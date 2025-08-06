import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaProdutosRoutingModule } from './lista-produtos-routing-module';
import { ListaProdutosComponent } from './lista-produtos.component';
import { ProdutoComponent } from './produto/produto.component';


@NgModule({
  declarations: [
    ListaProdutosComponent,
    ProdutoComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ListaProdutosRoutingModule,
  ]
})
export class ListaProdutosModule { }
