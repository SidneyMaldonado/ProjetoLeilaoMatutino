import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Mensagem } from '../entities/mensagem';
import { Raca } from '../entities/raca';
import { RacaService } from '../services/raca.service';

@Component({
  selector: 'app-raca-excluir',
  templateUrl: './raca-excluir.component.html',
  styleUrls: ['./raca-excluir.component.css']
})
export class RacaExcluirComponent implements OnInit {

  mensagem: Mensagem = {
    mensagem: '',
    erros: []
  }
  raca: Raca = {
    idRaca: 0,
    nome: '',
    descricao: '',
    ativo: false
  }
 
  constructor(private racaService: RacaService, private route: ActivatedRoute, 
    private router: Router) { }

    ngOnInit(): void {
      let id = this.route.snapshot.paramMap.get("id");
  
      this.racaService.buscar(id+"").subscribe(
        dados => this.raca = dados
      )
    }
  
    excluir( frm: NgForm){
      this.racaService.excluir(this.raca).subscribe(
        dados => { this.mensagem = dados
          alert(this.mensagem.mensagem)
          console.log(this.mensagem)
          this.router.navigateByUrl("raca")
          
        }
      )
      
    }
  
  }
