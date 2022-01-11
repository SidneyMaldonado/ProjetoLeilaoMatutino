import { Leilao } from './../entities/leilao';
import { CompradorService } from './../services/comprador.service';
import { Comprador } from './../entities/comprador';
import { Component, OnInit } from '@angular/core';
import { Mensagem } from '../entities/mensagem';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-compradorexcluir',
  templateUrl: './compradorexcluir.component.html',
  styleUrls: ['./compradorexcluir.component.css']
})
export class CompradorexcluirComponent implements OnInit {

  mensagem: Mensagem = {
    mensagem: '',
    erros: []
  }

  comprador : Comprador = {
    idComprador: 0,
    nome: '',
    cpf: '',
    dataNascimento: new Date(),
    telefone: '',
    email: '',
    idLeilao: 0,
    ativo: false
  }

  leiloes : Leilao = {
    idLeilao: 0,
    nome: '',
    descricao: '',
    data: new Date(),
    ativo: false
  }
  constructor(private compradorService: CompradorService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    let id = this.route.snapshot.paramMap.get("id");

    this.compradorService.buscar(id+"").subscribe(
      dados => this.comprador = dados
    )
  }

  excluir( frm: NgForm){
    this.compradorService.excluir(this.comprador).subscribe(
      dados => { this.mensagem = dados
        alert(this.mensagem.mensagem)
        console.log(this.mensagem)
        this.router.navigateByUrl("comprador")
      }
    )
  }

}

