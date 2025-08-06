import { Component } from '@angular/core';
import { Produto } from '../../models/produto.model';

@Component({
  selector: 'app-lista-produtos',
  standalone: false,
  templateUrl: './lista-produtos.component.html',
  styleUrl: './lista-produtos.component.scss'
})
export class ListaProdutosComponent {

  busca: string = ''
  lista_produtos: Produto[] = [
    {
      nome: "mouse",
      descricao: "mouse simples",
      preco: 35
    },
    {
      nome: "monitor",
      descricao: "monitor simples",
      preco: 500
    },
    {
      nome: "teclado",
      descricao: "teclado simples",
      preco: 80
    },
    {
      nome: "mouse pad",
      descricao: "mouse pad simples",
      preco: 25
    },
    {
      nome: "webcam",
      descricao: "webcam simples",
      preco: 150
    },
    {
      nome: "cabo hdmi",
      descricao: "cabo hmdi simples",
      preco: 50
    },
    {
      nome: "fone bluetooth",
      descricao: "fone bluetooth simples",
      preco: 75
    },
    {
      nome: "cabo usb-c",
      descricao: "cabo usb-c simples",
      preco: 30
    },
  ]

  buscar(event:any) {
    // toda ref a variavel que esta fora funcao precisa do this, 
    // se nao ela chama o escopo sõ da funao
    this.busca = event.target.value;
  }

  constructor() { }

  ngOnInit(): void {

  }
}
