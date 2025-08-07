import { Component, OnInit } from '@angular/core';
import { Produto } from '../../models/produto.model';
import { ConsumirApiService } from '../../service/consumir-api.service';

@Component({
  selector: 'app-lista-produtos',
  standalone: false,
  templateUrl: './lista-produtos.component.html',
  styleUrl: './lista-produtos.component.scss'
})
export class ListaProdutosComponent implements OnInit {

  busca: string = ''
  lista_produtos: Produto[] = []

  buscar(event: any) {
    // toda ref a variavel que esta fora funcao precisa do this, 
    // se nao ela chama o escopo sõ da função
    this.busca = event.target.value;
  }

  constructor(
    public consumirApi: ConsumirApiService
  ) { }

  ngOnInit(): void {
    // quando cair na inicialização ele chama o get e o resultado do get vira nossa lista de produtos
    // que é acessada entre componentes
    this.consumirApi.getDados('http://localhost:3000/produtos').subscribe((result) => {
      this.lista_produtos = result;
    })
  }
}
