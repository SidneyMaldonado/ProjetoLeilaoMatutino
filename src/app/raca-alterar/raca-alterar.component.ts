import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Mensagem } from '../entities/mensagem';
import { Raca } from '../entities/raca';
import { RacaService } from '../services/raca.service';


@Component({
  selector: 'app-raca-alterar',
  templateUrl: './raca-alterar.component.html',
  styleUrls: ['./raca-alterar.component.css']
})
export class RacaAlterarComponent implements OnInit {
  mensagem: Mensagem = {
    mensagem: '',
    erros: []
  }
  raca: Raca = {
    idRaca: 0,
    nome: '',
    descricao: '',
    ativo: true
  }

  constructor(private racaService: RacaService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("id");

    this.racaService.buscar(id+"").subscribe(
      dados => this.raca = dados
    )
  }

  alterar( frm: NgForm){
    this.racaService.alterar(this.raca).subscribe(
      dados => { this.mensagem = dados
        alert(this.mensagem.mensagem)
        console.log(this.mensagem)
        if (this.mensagem.erros != null){
          this.mensagem.erros.forEach( (obj) => { alert(obj) })
        } else {
          this.router.navigateByUrl("raca")
        }
      }
    )
  }

}

