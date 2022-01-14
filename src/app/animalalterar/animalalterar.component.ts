import { Mensagem } from './../entities/mensagem';
import { Vendedor } from './../entities/vendedor';
import { NgForm } from '@angular/forms';
import { AnimalService } from './../services/animal.service';
import { Component, OnInit } from '@angular/core';
import { Animal } from '../entities/animal';
import { Raca } from '../entities/raca';
import { RacaService } from '../services/raca.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Comprador } from '../entities/comprador';
import { Medico } from '../entities/medico';
import { Leilao } from '../entities/leilao';
import { LeilaoService } from '../services/leilao.service';
import { MedicoService } from '../services/medico.service';
import { CompradorService } from '../services/comprador.service';
import { VendedorService } from '../services/vendedor.service';

@Component({
  selector: 'app-animalalterar',
  templateUrl: './animalalterar.component.html',
  styleUrls: ['./animalalterar.component.css']
})
export class AnimalalterarComponent implements OnInit {

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

  constructor(private racaService: RacaService,private leilaoService: LeilaoService,private medicoService: MedicoService,private compradorService: CompradorService,private vendedorService: VendedorService, private animalService: AnimalService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.racaService.listar().subscribe(
      dados => this.racas = dados
    )

    this.vendedorService.listar().subscribe(
      dados => this.vendedores = dados
    )

    this.compradorService.listar().subscribe(
      dados => this.compradores = dados
    )

    this.medicoService.listar().subscribe(
      dados => this.medicos = dados
    )

    this.leilaoService.listar().subscribe(
      dados => this.leiloes = dados
    )

    let id = this.route.snapshot.paramMap.get("id");

    this.animalService.buscar(id+"").subscribe(
      dados => this.animal = dados
    )

  }

  alterar( frm: NgForm){
    this.animalService.alterar(this.animal).subscribe(
      dados => { this.mensagem = dados
        alert(this.mensagem.mensagem)
        console.log(this.mensagem)
        if (this.mensagem.erros != null){
          this.mensagem.erros.forEach( (obj) => { alert(obj) })
        } else {
          this.router.navigateByUrl("animal")
        }
      }
    )
  }

}
