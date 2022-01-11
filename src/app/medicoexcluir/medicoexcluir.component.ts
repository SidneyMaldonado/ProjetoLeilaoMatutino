import { MedicoService } from './../services/medico.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mensagem } from '../entities/mensagem';
import { Medico } from '../entities/medico';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-medicoexcluir',
  templateUrl: './medicoexcluir.component.html',
  styleUrls: ['./medicoexcluir.component.css']
})
export class MedicoexcluirComponent implements OnInit {

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


  excluir( frm: NgForm){
    this.medicoService.excluir(this.medico).subscribe(
      dados => { this.mensagem = dados
        alert(this.mensagem.mensagem)
        console.log(this.mensagem)
        this.router.navigateByUrl("medico")

      }
    )

  }

}
