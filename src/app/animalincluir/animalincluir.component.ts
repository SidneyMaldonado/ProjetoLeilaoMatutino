import { Mensagem } from './../entities/mensagem';
import { AnimalService } from './../services/animal.service';
import { RacaService } from './../services/raca.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Animal } from '../entities/animal';
import { Raca } from '../entities/raca';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-animalincluir',
  templateUrl: './animalincluir.component.html',
  styleUrls: ['./animalincluir.component.css']
})
export class AnimalincluirComponent implements OnInit {
  mensagem: Mensagem = {
    mensagem: '',
    erros: []
  }
  racas: Raca[] = []
  animal: Animal = {
    idAnimal: 0,
    nome: '',
    registro: '',
    preco: 0,
    idRaca: 0,
    idVendedor: 0,
    idComprador: 0,
    idMedico: 0,
    pesoArroba: 0,
    idade: 0,
    idLeilao: 0,
    ativo: true
  }
  constructor(private racaService: RacaService, private animalService: AnimalService, private router: Router) { }

  ngOnInit(): void {

    this.racaService.listar().subscribe(
      dados => this.racas = dados
    )

  }

  incluir( frm: NgForm){


    this.animalService.incluir(this.animal).subscribe(


      dados => { this.mensagem = dados
        alert(this.mensagem.mensagem)
        console.log(this.mensagem)
        if (this.mensagem.erros != null){
          this.mensagem.erros.forEach( (obj) => { alert(obj) })
        } else {
          this.router.navigateByUrl("animal")
        }
      }
    /*  dados => { this.mensagem = dados

        alert(this.mensagem.mensagem)
        this.mensagem.erros.forEach(obj => {
          alert(obj)
         });
      }*/

    )
    
  }


}