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
<<<<<<< HEAD
import { RacaIncluirComponent } from './raca-incluir/raca-incluir.component';
=======
import { VendedorIncluirComponent } from './vendedorincluir/vendedorincluir.component';
import { CommonModule } from '@angular/common';
import { LeilaoincluirComponent } from './leilaoincluir/leilaoincluir.component';
>>>>>>> 5cb703490ce6d162b9ebdd5cb83cb0ca48000e15


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
<<<<<<< HEAD
    RacaIncluirComponent
=======
    VendedorIncluirComponent,
    LeilaoincluirComponent
>>>>>>> 5cb703490ce6d162b9ebdd5cb83cb0ca48000e15
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
