import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalListarComponent } from './animal-listar/animal-listar.component';
import { HttpClientModule } from '@angular/common/http';
import { AnimalincluirComponent } from './animalincluir/animalincluir.component'
import { FormsModule } from '@angular/forms';
import { CompradorListarComponent } from './comprador-listar/comprador-listar.component';
import { RacaListarComponent } from './raca-listar/raca-listar.component';
import { LeilaoListarComponent } from './leilao-listar/leilao-listar.component';
import { MedicoListarComponent } from './medico-listar/medico-listar.component';
import { CompradorIncluirComponent } from './comprador-incluir/comprador-incluir.component';
import { MedicoincluirComponent } from './medicoincluir/medicoincluir.component';
import { RacaIncluirComponent } from './raca-incluir/raca-incluir.component';
import { VendedorListarComponent } from './vendedor-listar/vendedor-listar.component';
import { VendedorIncluirComponent } from './vendedorincluir/vendedorincluir.component';
import { CommonModule } from '@angular/common';
import { LeilaoincluirComponent } from './leilaoincluir/leilaoincluir.component';
import { AnimalalterarComponent } from './animalalterar/animalalterar.component';
import { RacaAlterarComponent } from './raca-alterar/raca-alterar.component';


@NgModule({
  declarations: [
    AppComponent,
    AnimalListarComponent,
    AnimalincluirComponent,
    CompradorListarComponent,
    CompradorIncluirComponent,
    RacaListarComponent,
    LeilaoListarComponent,
    CompradorListarComponent,
    MedicoincluirComponent,
    MedicoListarComponent,
    RacaIncluirComponent,
    VendedorListarComponent,
    VendedorIncluirComponent,
    LeilaoincluirComponent,
    LeilaoincluirComponent,
    AnimalalterarComponent,
    RacaAlterarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
