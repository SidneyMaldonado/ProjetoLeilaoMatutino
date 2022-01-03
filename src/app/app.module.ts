import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalListarComponent } from './animal-listar/animal-listar.component';
import { HttpClientModule } from '@angular/common/http';
import { AnimalincluirComponent } from './animalincluir/animalincluir.component'
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
<<<<<<< HEAD
import { CompradorListarComponent } from './comprador-listar/comprador-listar.component';
import { VendedorIncluirComponent } from './vendedor-incluir/vendedor-incluir.component';
=======
=======
>>>>>>> 5ed6cd1a96b027be7a72b6593527482876489dbb
import { RacaListarComponent } from './raca-listar/raca-listar.component';
import { LeilaoListarComponent } from './leilao-listar/leilao-listar.component';
import { CompradorListarComponent } from './comprador-listar/comprador-listar.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalListarComponent,
    AnimalincluirComponent,
<<<<<<< HEAD
<<<<<<< HEAD
    CompradorListarComponent,
VendedorIncluirComponent
=======
=======
>>>>>>> 5ed6cd1a96b027be7a72b6593527482876489dbb
    RacaListarComponent,
    LeilaoListarComponent,
    CompradorListarComponent
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
