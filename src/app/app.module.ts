import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { App } from './app.component';
import { NavBar } from './component/nav-bar/nav-bar.component';
import { ListaProdutosComponent } from './module/lista-produtos/lista-produtos.component';
import { CarrinhoComponent } from './module/carrinho/carrinho.component';

@NgModule({
  declarations: [
    App,
    NavBar,
    //ListaProdutosComponent,
    CarrinhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
