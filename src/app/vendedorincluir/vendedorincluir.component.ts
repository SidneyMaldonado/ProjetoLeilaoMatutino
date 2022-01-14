import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Mensagem } from '../entities/mensagem';
import { Vendedor } from '../entities/vendedor';
import { VendedorService } from '../services/vendedor.service';

@Component({
  selector: 'app-vendedorincluir',
  templateUrl: './vendedorincluir.component.html',
  styleUrls: ['./vendedorincluir.component.css']
})

export class VendedorIncluirComponent implements OnInit {
mensagem: Mensagem ={
    mensagem: '',
  erros: []
  
}
  vendedores : Vendedor = {
    idVendedor: 0,
    nome: '',
    cpf: '',
    dataNascimento: new Date(),
    telefone: '',
    email: '',
    ativo: false
  }
  

  constructor(private vendedorService: VendedorService) { }

  ngOnInit(): void {

    this.vendedorService.listar().subscribe(
      dados => this.vendedores = dados
    )
  }

  incluir(frm: NgForm){

    this.vendedorService.incluir(this.vendedores).subscribe(

      dados => {this.mensagem = dados

        alert(this.mensagem.mensagem)
        this.mensagem.erros.forEach(obj => {
          alert(obj)
        });
    
      }
      
    )


  }




}

    
