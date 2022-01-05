import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LeilaoService } from './../services/leilao.service';
import { CompradorService } from './../services/comprador.service';
import { Comprador } from './../entities/comprador';
import { Leilao } from './../entities/leilao';
import { Mensagem } from './../entities/mensagem';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compradoralterar',
  templateUrl: './compradoralterar.component.html',
  styleUrls: ['./compradoralterar.component.css']
})
export class CompradoralterarComponent implements OnInit {

  mensagem: Mensagem = {
    mensagem: '',
    erros: []
  }

  leiloes: Leilao[] = []
  comprador: Comprador = {
    idComprador: 0,
    nome: '',
    cpf: '',
    dataNascimento: new Date,
    telefone: '',
    email: '',
    idLeilao: 0,
    ativo: false
  }

  constructor(private compradorService: CompradorService, private leilaoService: LeilaoService, 
    private route: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
    this.leilaoService.listar().subscribe(
      dados => this.leiloes = dados
    )
  }

  alterar(frm:NgForm){
    this.compradorService.alterar(this.comprador).subscribe(
      dados =>  {this.mensagem = dados
        alert(this.mensagem.mensagem)
        console.log(this.mensagem)
        if(this.mensagem.erros != null){
          this.mensagem.erros.forEach((obj) => {alert(obj)})
        } else {
          this.router.navigateByUrl("comprador")
        }
      }
    )
  }

}
