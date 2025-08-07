import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { App } from './app.component';
import { NavBar } from './component/nav-bar/nav-bar.component';
import { CarrinhoModule } from './module/carrinho/carrinho.module';
import { ListaProdutosModule } from './module/lista-produtos/lista-produtos.module';


@NgModule({
  declarations: [
    App,
    NavBar,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListaProdutosModule,
    CarrinhoModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [App]
})
export class AppModule { }
