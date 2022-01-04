import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalListarComponent } from './animal-listar/animal-listar.component';
import { HttpClientModule } from '@angular/common/http';
import { AnimalincluirComponent } from './animalincluir/animalincluir.component'
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { CompradorListarComponent } from './comprador-listar/comprador-listar.component';
import { VendedorIncluirComponent } from './vendedor-incluir/vendedor-incluir.component';
=======
>>>>>>> 1e4b5a8eb315be940e4c5d7e3ac7b5a20522fcb6
import { RacaListarComponent } from './raca-listar/raca-listar.component';
import { LeilaoListarComponent } from './leilao-listar/leilao-listar.component';


@NgModule({
  declarations: [
    AppComponent,
    AnimalListarComponent,
    AnimalincluirComponent,
<<<<<<< HEAD

    CompradorListarComponent,
VendedorIncluirComponent,
=======
>>>>>>> 1e4b5a8eb315be940e4c5d7e3ac7b5a20522fcb6
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
