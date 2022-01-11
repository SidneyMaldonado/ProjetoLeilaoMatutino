import { Vendedor } from './../entities/vendedor';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mensagem } from '../entities/mensagem';
import { VendedorService } from './../services/vendedor.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-vendedorexcluir',
  templateUrl: './vendedorexcluir.component.html',
  styleUrls: ['./vendedorexcluir.component.css']
})
export class VendedorexcluirComponent implements OnInit {

  mensagem: Mensagem = {
    mensagem: '',
    erros: []
  }

  vendedor : Vendedor = {
    idVendedor: 0,
    nome: '',
    cpf: 0,
    dataNascimento: new Date(),
    telefone: 0,
    email: '',
    ativo: false
  }
  constructor(private vendedorService: VendedorService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    let id = this.route.snapshot.paramMap.get("id");

    this.vendedorService.buscar(id+"").subscribe(
      dados => this.vendedor = dados
    )
  }


  excluir( frm: NgForm){
    this.vendedorService.excluir(this.vendedor).subscribe(
      dados => { this.mensagem = dados
        alert(this.mensagem.mensagem)
        console.log(this.mensagem)
        this.router.navigateByUrl("vendedor")

      }
    )

  }

}
