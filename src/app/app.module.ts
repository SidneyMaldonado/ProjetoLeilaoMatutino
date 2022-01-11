import { AnimalexcluirComponent } from './animalexcluir/animalexcluir.component';
import { LeilaoexcluirComponent } from './leilaoexcluir/leilaoexcluir.component';
import { CompradoralterarComponent } from './compradoralterar/compradoralterar.component';
import { LeilaoalterarComponent } from './leilaoalterar/leilaoalterar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalListarComponent } from './animal-listar/animal-listar.component';
import { HttpClientModule } from '@angular/common/http';
import { AnimalincluirComponent } from './animalincluir/animalincluir.component'
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
import { AnimalalterarComponent } from './animalalterar/animalalterar.component';
import { LeilaoincluirComponent } from './leilaoincluir/leilaoincluir.component';
import { FormsModule } from '@angular/forms';
import { VendedoralterarComponent } from './vendedoralterar/vendedoralterar.component';
import { RacaAlterarComponent } from './raca-alterar/raca-alterar.component';
import { MedicoalterarComponent } from './medicoalterar/medicoalterar.component';
import { RacaExcluirComponent } from './raca-excluir/raca-excluir.component';
import { VendedorexcluirComponent } from './vendedorexcluir/vendedorexcluir.component';
import { MedicoexcluirComponent } from './medicoexcluir/medicoexcluir.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalListarComponent,
    AnimalincluirComponent,
    AnimalalterarComponent,
    AnimalexcluirComponent,

    CompradorListarComponent,
    CompradorIncluirComponent,
    CompradoralterarComponent,



    RacaListarComponent,
    RacaIncluirComponent,
    RacaAlterarComponent,
    RacaExcluirComponent,

    LeilaoListarComponent,
    LeilaoincluirComponent,
    LeilaoalterarComponent,
    LeilaoexcluirComponent,

    MedicoincluirComponent,
    MedicoListarComponent,
    MedicoalterarComponent,
    MedicoexcluirComponent,

    VendedorListarComponent,
    VendedorIncluirComponent,
    VendedoralterarComponent,
    VendedorexcluirComponent

],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
