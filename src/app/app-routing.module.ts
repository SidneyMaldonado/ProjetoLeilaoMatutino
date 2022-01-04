import { LeilaoincluirComponent } from './leilaoincluir/leilaoincluir.component';
import { AnimalincluirComponent } from './animalincluir/animalincluir.component';
import { AnimalListarComponent } from './animal-listar/animal-listar.component';
import { RouterModule, Routes } from '@angular/router';
import { RacaListarComponent } from './raca-listar/raca-listar.component';
import { LeilaoListarComponent } from './leilao-listar/leilao-listar.component';
import { MedicoListarComponent } from './medico-listar/medico-listar.component';
import { VendedorListarComponent } from './vendedor-listar/vendedor-listar.component';
import { VendedorIncluirComponent } from './vendedorincluir/vendedorincluir.component';
import { CompradorListarComponent } from './comprador-listar/comprador-listar.component';
import { NgModule } from '@angular/core';
import { MedicoincluirComponent } from './medicoincluir/medicoincluir.component';


const routes: Routes = [

  {path:"animal", component: AnimalListarComponent},
  {path:"animal/incluir", component: AnimalincluirComponent},
  {path:"comprador", component: CompradorListarComponent},
  {path: "raca", component: RacaListarComponent},
  {path: "leilao", component: LeilaoListarComponent},
  {path: "vendedor", component: VendedorListarComponent},
  {path: "medico", component: MedicoListarComponent},
  {path: "vendedor/incluir", component: VendedorIncluirComponent},
  {path: "leilao/incluir", component: LeilaoincluirComponent},
  {path: "medico/incluir", component: MedicoincluirComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
