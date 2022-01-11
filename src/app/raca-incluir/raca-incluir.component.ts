import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Mensagem } from '../entities/mensagem';
import { Raca } from '../entities/raca';
import { RacaService } from '../services/raca.service';

@Component({
  selector: 'app-raca-incluir',
  templateUrl: './raca-incluir.component.html',
  styleUrls: ['./raca-incluir.component.css']
})
export class RacaIncluirComponent implements OnInit {
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

  ngOnInit(): void {}

  incluir( frm: NgForm){
    this.racaService.incluir(this.raca).subscribe(

      dados => { this.mensagem = dados

        this.racaService.incluir(this.raca).subscribe(
          dados => { this.mensagem = dados
            alert(this.mensagem.mensagem)
            console.log(this.mensagem)
            this.router.navigateByUrl("raca")
            
         });
      }
    )
  }


}

