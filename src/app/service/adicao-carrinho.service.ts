import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class AdicaoCarrinhoService {

  listaProdutos: Produto[] = []

  adcProduto(produto: Produto) {
    if (this.listaProdutos.includes(produto)) {
      return false
    }
    produto.quantidade = 1;
    this.listaProdutos.push(produto) // manda de volta com valor atualizado
    console.log(this.listaProdutos)
    return true
  }

  constructor() { }
}
