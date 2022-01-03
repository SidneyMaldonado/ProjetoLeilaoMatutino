import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalListarComponent } from './animal-listar/animal-listar.component';
import { HttpClientModule } from '@angular/common/http';
import { AnimalincluirComponent } from './animalincluir/animalincluir.component'
import { FormsModule } from '@angular/forms';
import { RacaListarComponent } from './raca-listar/raca-listar.component';
<<<<<<< HEAD
import { VendedorComponent } from './vendedor-listar/vendedor.component';
import { VendedorListarComponent } from './vendedor-listar/vendedor-listar.component';
=======
import { LeilaoListarComponent } from './leilao-listar/leilao-listar.component';
>>>>>>> 4480d1c0328fbc47e33b13ec257a431a7c8fa5ea

@NgModule({
  declarations: [
    AppComponent,
    AnimalListarComponent,
    AnimalincluirComponent,
    RacaListarComponent,
<<<<<<< HEAD
    VendedorComponent,
VendedorListarComponent
=======
    LeilaoListarComponent
>>>>>>> 4480d1c0328fbc47e33b13ec257a431a7c8fa5ea
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
