import { Component, OnInit } from '@angular/core';
import { Produto } from '../../models/produto.model';
import { ConsumirApiService } from '../../service/consumir-api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista-produtos',
  standalone: false,
  templateUrl: './lista-produtos.component.html',
  styleUrl: './lista-produtos.component.scss'
})
export class ListaProdutosComponent implements OnInit {

  busca: string = ''
  lista_produtos: Produto[] = []
  subscript: Subscription = new Subscription;

  buscar(event: any) {
    // toda ref a variavel que esta fora funcao precisa do this, se nao ela chama o escopo sõ da função
    this.busca = event.target.value;
  }

  constructor(
    public consumirApi: ConsumirApiService
  ) { }

  ngOnInit(): void {
    console.log("caiu no init")
    // quando cair na inicialização ele chama o get e o resultado do get vira nossa lista de produtos
    // que é acessada entre componentes. subscribe é um observer
    this.subscript = this.consumirApi.getDados('http://localhost:3000/produtos').subscribe((result) => {
      console.log("caiu dentro do result");
      console.log(result);
      this.lista_produtos = result;
    })
  }

  ngOnDestroy() {
    this.subscript.unsubscribe();
  }
}
