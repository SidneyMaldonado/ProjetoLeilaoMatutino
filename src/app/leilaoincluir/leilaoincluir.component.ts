import { Mensagem } from './../entities/mensagem';
import { NgForm } from '@angular/forms';
import { Leilao } from './../entities/leilao';
import { Component, OnInit } from '@angular/core';
import { LeilaoService } from '../services/leilao.service';

@Component({
  selector: 'app-leilaoincluir',
  templateUrl: './leilaoincluir.component.html',
  styleUrls: ['./leilaoincluir.component.css']
})
export class LeilaoincluirComponent implements OnInit {

  mensagem: Mensagem = {
    mensagem: '',
    erros: []
  }

  leilao: Leilao = {
    idLeilao: 0,
    nome: '',
    descricao: '',
    data: new Date(),
    ativo: true
  }
  constructor(private leilaoService: LeilaoService) { }

  ngOnInit(): void {
  }
  incluir( frm: NgForm){


    this.leilaoService.incluir(this.leilao).subscribe(
      dados =>{
          this.mensagem = dados;
          alert(this.mensagem.mensagem)
      }
    )

  }


}
