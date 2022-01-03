import { AnimalincluirComponent } from './animalincluir/animalincluir.component';
import { AnimalListarComponent } from './animal-listar/animal-listar.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RacaListarComponent } from './raca-listar/raca-listar.component';

const routes: Routes = [

  {path:"animal", component: AnimalListarComponent},
  {path:"animal/incluir", component: AnimalincluirComponent},
  {path: "raca", component: RacaListarComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
