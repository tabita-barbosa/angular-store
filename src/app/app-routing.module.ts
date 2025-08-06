import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 // app em lazy loading, só carrega quando acessa a rota
const routes: Routes = [
  {
    path: "", redirectTo:"lista-produtos", pathMatch:"full"
  },
  {
    path: "carrinho", 
    loadChildren: () => 
      import("./module/carrinho/carrinho.module").then(
        m => m.CarrinhoModule
      ),
  },
  {
    path: "", redirectTo:"lista-produtos", pathMatch:"full"
  },
  {
    path: "lista-produtos", 
    loadChildren: () => 
      import("./module/lista-produtos/lista-produtos.module").then(
        m => m.ListaProdutosModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
