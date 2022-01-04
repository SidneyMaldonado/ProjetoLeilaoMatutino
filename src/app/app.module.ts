import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalListarComponent } from './animal-listar/animal-listar.component';
import { HttpClientModule } from '@angular/common/http';
import { AnimalincluirComponent } from './animalincluir/animalincluir.component'
import { FormsModule } from '@angular/forms';
import { CompradorListarComponent } from './comprador-listar/comprador-listar.component';
import { VendedorIncluirComponent } from './vendedor-incluir/vendedor-incluir.component';
import { RacaListarComponent } from './raca-listar/raca-listar.component';
import { LeilaoListarComponent } from './leilao-listar/leilao-listar.component';
import { CompradorListarComponent } from './comprador-listar/comprador-listar.component';
import { CompradorIncluirComponent } from './comprador-incluir/comprador-incluir.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalListarComponent,
    AnimalincluirComponent,
    CompradorListarComponent,
VendedorIncluirComponent
    RacaListarComponent,
    LeilaoListarComponent,
    CompradorListarComponent,
    CompradorIncluirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
