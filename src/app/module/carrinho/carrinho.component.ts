import { Component } from '@angular/core';
import { AdicaoCarrinhoService } from '../../service/adicao-carrinho.service';
import { Produto } from '../../models/produto.model';

@Component({
  selector: 'app-carrinho',
  standalone: false,
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.scss'
})
export class CarrinhoComponent {

  produtos: Produto[] = [];
  total = 0;

  constructor(public addCarrinhoService: AdicaoCarrinhoService) {

  }

  ngOnInit(): void {
    this.produtos = this.addCarrinhoService.listaProdutos
    this.total = this.addCarrinhoService.getTotalCarrinho()
  }

  adcProduto(produto: Produto) {
    if (produto.quantidade) {
      produto.quantidade += 1
    }
    this.total = this.addCarrinhoService.getTotalCarrinho()
  }

  rmvProduto(produto: Produto) {
    if (produto.quantidade) {
      produto.quantidade -= 1
    }
    if (produto.quantidade == 0) {
      this.addCarrinhoService.rmvProduto(produto)
    }
    this.total = this.addCarrinhoService.getTotalCarrinho()
  }

  // sobre carrinho e persistencia
  // de adiciono 2 mouses, entro no carrinho e volto pra lista e adiciono mais um ele cria outro endereco de memoria! tipo mouse 1 - 2 unid e mouse 2 - 1 unid 
  // quando saimos do componente ele é destruido e quando entramos construido de novo, nesse caso a lista de produtos cria objetos novos pra lista de produtos. quando verificamos estava pelo .includes, que compara valor do endereco de memoria e não do valor do obj em si.

  // ciclo do componente
  // constructor é o primeiro
  // ngOnInit - segundo - quando cria html, aqui é o lugar pra consumo de api pra montar tela
  // ngAfterViewInit - terceiro - utilizado pra algo que precisa iniciar antes e depois pode receber os dados
  // tem tbm o ngOnChanges que pega qlqr alteração na tela
  // pra pegar so de um elemento do componente - no ngOnChanges recebe (change: SimpleChanges) ai faz if se change.contadorA faça X. esse simpleChanges é do angular core!!
  // ngOnDestroy- ultimo ao destruir o componente - uso limpar chamada de observador, tipo subscribe por exemplo
}
