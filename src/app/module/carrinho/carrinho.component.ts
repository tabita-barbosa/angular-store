import { Component, OnInit } from '@angular/core';
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

  constructor(public addCarrinhoService: AdicaoCarrinhoService) {

  }

  ngOnInit(): void {
    console.log('ngOnInit') // segundo - quando cria html, aqui é o lugar pra consumo de api pra montar tela
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit') // terceiro - utilizado pra algo que precisa iniciar antes e depois pode receber os dados
    // tem tbm o ngOnChanges que pega qlqr alteração na tela
    // pra pegar so de um elemento do componente - no ngOnChanges recebe (change: SimpleChanges) ai faz if se change.contadorA faça X. esse simpleChanges é do angular core!!
  }
  ngOnDestroy() {
    console.log('ngOnDestroy') // ultimo ao destruir o componente - uso limpar chamada de observador, tipo subscribe por exemplo
  }
}
