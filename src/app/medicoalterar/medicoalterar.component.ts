import { Mensagem } from './../entities/mensagem';
import { Medico } from './../entities/medico';
import { Component, OnInit } from '@angular/core';
import { MedicoService } from '../services/medico.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-medicoalterar',
  templateUrl: './medicoalterar.component.html',
  styleUrls: ['./medicoalterar.component.css']
})
export class MedicoalterarComponent implements OnInit {
  mensagem: Mensagem = {
    mensagem: '',
    erros: []
  }

  medico: Medico = {
    idMedico: 0,
    nome: '',
    crmv: 0,
    dataNascimento: new Date(),
    telefone: '',
    email: '',
    ativo: true
  }
  constructor(
    private medicoService: MedicoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    let id = this.route.snapshot.paramMap.get("id");

    this.medicoService.buscar(id+"").subscribe(
      dados => this.medico = dados
    )
  }

  alterar( frm: NgForm){
    this.medicoService.alterar(this.medico).subscribe(
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
