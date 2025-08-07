import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class AdicaoCarrinhoService {

  listaProdutos: Produto[] = []

  adcProduto(produto: Produto) {
    let i = 0;
    while (i < this.listaProdutos.length) {
      if (produto.nome === this.listaProdutos[i].nome) {
        return false
      }
      i += 1
    }

    produto.quantidade = 1;
    this.listaProdutos.push(produto) // manda de volta com valor atualizado
    console.log(this.listaProdutos)
    return true
  }

  rmvProduto(produto: Produto) {
    if (this.listaProdutos.includes(produto)) { // includes funciona pq a gente só add no mesmo endereço agora
      this.listaProdutos.splice(this.listaProdutos.indexOf(produto), 1) // 1, porque é um produto
    }
  }

  getTotalCarrinho() {
    let i = 0;
    let total = 0;
    while (i < this.listaProdutos.length) {
      total += this.listaProdutos[i].preco * (this.listaProdutos[i].quantidade || 1)
      i += 1
    }
    return total
  }

  constructor() { }
}
