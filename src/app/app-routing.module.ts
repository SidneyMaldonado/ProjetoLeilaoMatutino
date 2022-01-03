import { CompradorListarComponent } from './comprador-listar/comprador-listar.component';
import { AnimalincluirComponent } from './animalincluir/animalincluir.component';
import { AnimalListarComponent } from './animal-listar/animal-listar.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RacaListarComponent } from './raca-listar/raca-listar.component';
import { LeilaoListarComponent } from './leilao-listar/leilao-listar.component';
import { VendedorListarComponent } from './vendedor-listar/vendedor-listar.component';

const routes: Routes = [

  {path:"animal", component: AnimalListarComponent},
  {path:"animal/incluir", component: AnimalincluirComponent},
  {path:"comprador", component: CompradorListarComponent}
  {path: "raca-listar", component: RacaListarComponent},
  {path: "leilao-listar", component: LeilaoListarComponent},
  {path: "vendedor", component : VendedorListarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
