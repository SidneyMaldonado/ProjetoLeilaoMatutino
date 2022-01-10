import { LeilaoService } from './../services/leilao.service';
import { Component, OnInit } from '@angular/core';
import { Leilao } from '../entities/leilao';
import { Mensagem } from '../entities/mensagem';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-leilaoalterar',
  templateUrl: './leilaoalterar.component.html',
  styleUrls: ['./leilaoalterar.component.css']
})
export class LeilaoalterarComponent implements OnInit {

  mensagem: Mensagem = {
    mensagem: '',
    erros: []
  }

  leiloes : Leilao[] = []
  constructor(private leilaoService: LeilaoService,
              private route: ActivatedRoute,
              private router: Router) { }


  leilao: Leilao = {
    idLeilao: 0,
    nome: '',
    descricao: '',
    data: new Date(),
    ativo: true
  }
  ngOnInit(): void {
    this.leilaoService.listar().subscribe(
      dados => this.leilaoService = dados
    )

    let id = this.route.snapshot.paramMap.get("id");

    this.leilaoService.buscar(id+"").subscribe(
      (      dados: Leilao) => this.leilao = dados
    )
  }
  alterar( frm: NgForm){
    this.leilaoService.alterar(this.leilao).subscribe(
        dados => { this.mensagem = dados
        alert(this.mensagem.mensagem)
        console.log(this.mensagem)
        if (this.mensagem.erros != null){
          this.mensagem.erros.forEach( (obj) => { alert(obj) })
        } else {
          this.router.navigateByUrl("leilao")
        }
      }
    )
  }
}
