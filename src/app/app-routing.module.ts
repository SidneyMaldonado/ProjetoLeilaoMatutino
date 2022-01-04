
import { CompradorIncluirComponent } from './comprador-incluir/comprador-incluir.component';
import { CompradorListarComponent } from './comprador-listar/comprador-listar.component';
import { LeilaoincluirComponent } from './leilaoincluir/leilaoincluir.component';
import { LeilaoListarComponent } from './leilao-listar/leilao-listar.component';
import { AnimalincluirComponent } from './animalincluir/animalincluir.component';
import { AnimalListarComponent } from './animal-listar/animal-listar.component';
import { RouterModule, Routes } from '@angular/router';
import { MedicoListarComponent } from './medico-listar/medico-listar.component';
import { VendedorListarComponent } from './vendedor-listar/vendedor-listar.component';
import { RacaIncluirComponent } from './raca-incluir/raca-incluir.component';
import { VendedorIncluirComponent } from './vendedorincluir/vendedorincluir.component';
import { NgModule } from '@angular/core';
import { RacaListarComponent } from './raca-listar/raca-listar.component';

const routes: Routes = [

  {path:"animal", component: AnimalListarComponent},
  {path:"animal/incluir", component: AnimalincluirComponent},
  {path:"comprador-listar", component: CompradorListarComponent},
  {path:"comprador/incluir", component: CompradorIncluirComponent},
  {path: "raca-listar", component: RacaListarComponent},
  {path: "leilao-listar", component: LeilaoListarComponent},
  {path: "vendedor", component : VendedorListarComponent},
  {path:"comprador", component: CompradorListarComponent},
  {path: "raca", component: RacaListarComponent},
  {path: "raca/incluir", component: RacaIncluirComponent},
  {path: "leilao", component: LeilaoListarComponent},
  {path: "vendedor", component: VendedorListarComponent},
  {path: "medico", component: MedicoListarComponent},
  {path: "vendedor/incluir", component: VendedorIncluirComponent},
  {path: "leilao/incluir", component: LeilaoincluirComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
