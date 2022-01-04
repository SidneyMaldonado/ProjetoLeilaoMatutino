import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AnimalincluirComponent } from './animalincluir/animalincluir.component'
import { AnimalListarComponent } from './animal-listar/animal-listar.component';

import { CompradorListarComponent } from './comprador-listar/comprador-listar.component';
import { CompradorIncluirComponent } from './comprador-incluir/comprador-incluir.component';

import { RacaListarComponent } from './raca-listar/raca-listar.component';
import { RacaIncluirComponent } from './raca-incluir/raca-incluir.component';

import { LeilaoListarComponent } from './leilao-listar/leilao-listar.component';
import { LeilaoincluirComponent } from './leilaoincluir/leilaoincluir.component';

import { MedicoListarComponent } from './medico-listar/medico-listar.component';
import { MedicoincluirComponent } from './medicoincluir/medicoincluir.component';

import { VendedorIncluirComponent } from './vendedorincluir/vendedorincluir.component';




@NgModule({
  declarations: [
    AppComponent,

    AnimalListarComponent,
    AnimalincluirComponent,

    CompradorListarComponent,
    CompradorIncluirComponent,

    RacaListarComponent,
    RacaIncluirComponent,

    LeilaoListarComponent,
    LeilaoincluirComponent,

    MedicoincluirComponent,
    MedicoListarComponent,
    
    VendedorIncluirComponent
    
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
