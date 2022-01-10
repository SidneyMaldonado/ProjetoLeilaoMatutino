import { AnimalalterarComponent } from './animalalterar/animalalterar.component';
import { AnimalincluirComponent } from './animalincluir/animalincluir.component';
import { AnimalListarComponent } from './animal-listar/animal-listar.component';

import { CompradoralterarComponent } from './compradoralterar/compradoralterar.component';
import { CompradorIncluirComponent } from './comprador-incluir/comprador-incluir.component';
import { CompradorListarComponent } from './comprador-listar/comprador-listar.component';

import { LeilaoalterarComponent } from './leilaoalterar/leilaoalterar.component';
import { LeilaoincluirComponent } from './leilaoincluir/leilaoincluir.component';
import { LeilaoListarComponent } from './leilao-listar/leilao-listar.component';

import { MedicoalterarComponent } from './medicoalterar/medicoalterar.component';
import { MedicoincluirComponent } from './medicoincluir/medicoincluir.component';
import { MedicoListarComponent } from './medico-listar/medico-listar.component';

import { RacaAlterarComponent } from './raca-alterar/raca-alterar.component';
import { RacaListarComponent } from './raca-listar/raca-listar.component';
import { RacaIncluirComponent } from './raca-incluir/raca-incluir.component';
import { RacaExcluirComponent } from './raca-excluir/raca-excluir.component';

import { VendedorListarComponent } from './vendedor-listar/vendedor-listar.component';
import { VendedorIncluirComponent } from './vendedorincluir/vendedorincluir.component';
import { VendedoralterarComponent } from './vendedoralterar/vendedoralterar.component';
import { VendedorexcluirComponent } from './vendedorexcluir/vendedorexcluir.component';

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';





const routes: Routes = [

  {path:"animal", component: AnimalListarComponent},
  {path:"animal/incluir", component: AnimalincluirComponent},
  {path:"animal/alterar/:id", component: AnimalalterarComponent},

  {path:"comprador", component: CompradorListarComponent},
  {path:"comprador/incluir", component: CompradorIncluirComponent},
  {path: "comprador/alterar/:id", component: CompradoralterarComponent},

  {path: "raca/incluir", component: RacaIncluirComponent},
  {path: "raca", component: RacaListarComponent},
  {path: "raca/alterar/:id", component: RacaAlterarComponent},
  {path: "raca/excluir/:id", component: RacaExcluirComponent},

  {path: "leilao", component: LeilaoListarComponent},
  {path: "leilao/incluir", component: LeilaoincluirComponent},
  {path: "leilao/alterar/:id", component : LeilaoalterarComponent},

  {path: "medico", component: MedicoListarComponent},
  {path: "medico/incluir", component: MedicoincluirComponent},
  {path: "medico/alterar/:id", component: MedicoalterarComponent},
  
  {path: "vendedor/incluir", component: VendedorIncluirComponent},
  {path: "vendedor", component : VendedorListarComponent},
  {path: "vendedor/alterar/:id", component:VendedoralterarComponent},
  {path: "vendedor/excluir/:id", component:VendedorexcluirComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }