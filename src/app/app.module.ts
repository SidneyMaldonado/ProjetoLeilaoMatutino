import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalListarComponent } from './animal-listar/animal-listar.component';
import { HttpClientModule } from '@angular/common/http';
import { AnimalincluirComponent } from './animalincluir/animalincluir.component'
import { FormsModule } from '@angular/forms';
import { RacaListarComponent } from './raca-listar/raca-listar.component';
import { VendedorComponent } from './vendedor-listar/vendedor.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalListarComponent,
    AnimalincluirComponent,
    RacaListarComponent,
    VendedorComponent
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
