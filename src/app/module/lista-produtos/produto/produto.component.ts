import { Component, OnInit, Input } from '@angular/core';
import { Produto } from '../../../models/produto.model'

@Component({
  selector: 'app-produto',
  standalone: false,
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.scss'
})
export class ProdutoComponent  implements OnInit {
  // é tipagem, como no swift
  // outro ex é array tipado - variavelNova : string[] = []

  @Input() produto :Produto =  {
    nome: "",
    descricao: "",
    preco: 0
  }
  constructor() { }

  ngOnInit(): void {
  }

}
