import { AnimalincluirComponent } from './animalincluir/animalincluir.component';
import { AnimalListarComponent } from './animal-listar/animal-listar.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RacaListarComponent } from './raca-listar/raca-listar.component';
import { LeilaoListarComponent } from './leilao-listar/leilao-listar.component';
import { MedicoListarComponent } from './medico-listar/medico-listar.component';
import { VendedorListarComponent } from './vendedor-listar/vendedor-listar.component';
import { RacaIncluirComponent } from './raca-incluir/raca-incluir.component';

const routes: Routes = [

  {path:"animal", component: AnimalListarComponent},
  {path:"animal/incluir", component: AnimalincluirComponent},
  {path: "raca", component: RacaListarComponent},
  {path: "raca/incluir", component: RacaIncluirComponent},
  {path: "leilao", component: LeilaoListarComponent},
  {path: "vendedor", component: VendedorListarComponent},
  {path: "medico", component: MedicoListarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
