import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Leilao } from '../entities/leilao';
import { Mensagem } from '../entities/mensagem';
import { LeilaoService } from '../services/leilao.service';

@Component({
  selector: 'app-leilaoexcluir',
  templateUrl: './leilaoexcluir.component.html',
  styleUrls: ['./leilaoexcluir.component.css']
})
export class LeilaoexcluirComponent implements OnInit {

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

  constructor(private leilaoService: LeilaoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    let id = this.route.snapshot.paramMap.get("id");

    this.leilaoService.buscar(id+"").subscribe(
      dados => this.leilao = dados
    )
  }

  excluir( frm: NgForm){
    alert("chegou aqui");
    debugger;
    this.leilaoService.excluir(this.leilao).subscribe(
      dados => { this.mensagem = dados
        alert(this.mensagem.mensagem)
        console.log(this.mensagem)
        this.router.navigateByUrl("leilao")

      }
    )

  }

}
