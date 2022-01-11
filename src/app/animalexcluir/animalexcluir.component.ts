import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from '../entities/animal';
import { Comprador } from '../entities/comprador';
import { Leilao } from '../entities/leilao';
import { Medico } from '../entities/medico';
import { Mensagem } from '../entities/mensagem';
import { Raca } from '../entities/raca';
import { Vendedor } from '../entities/vendedor';
import { AnimalService } from '../services/animal.service';

@Component({
  selector: 'app-animalexcluir',
  templateUrl: './animalexcluir.component.html',
  styleUrls: ['./animalexcluir.component.css']
})
export class AnimalexcluirComponent implements OnInit {

  mensagem: Mensagem = {
    mensagem: '',
    erros: []
  }
  racas: Raca[] = []
  vendedores: Vendedor[] = []
  compradores: Comprador[] = []
  medicos: Medico[] = []
  leiloes: Leilao[] = []

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
    ativo: false
  }

  constructor(private animalService:AnimalService,
    private route: ActivatedRoute,
    private router: Router
    ) { }


  ngOnInit(): void {

    let id = this.route.snapshot.paramMap.get("id");
    this.animalService.buscar(id+"").subscribe(
      dados => this.animal = dados
    )
  }


    excluir (frm:NgForm){

      this.animalService.excluir(this.animal).subscribe(
        dados => {this.mensagem = dados
        alert(this.mensagem.mensagem)
        console.log(this.mensagem)
        this.router.navigateByUrl("animal")

        }
      )


    }
}
