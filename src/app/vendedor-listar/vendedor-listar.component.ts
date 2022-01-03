import { Component, OnInit } from '@angular/core';
import { Vendedor } from '../entities/vendedor';
import { VendedorService } from '../services/vendedor.service';

@Component({
  selector: 'app-vendedor-listar',
  templateUrl: './vendedor-listar.component.html',
  styleUrls: ['./vendedor-listar.component.css']
})
export class VendedorListarComponent implements OnInit {

  vendedores: Vendedor[] = []
  constructor( private servicoVendedor: VendedorService) { }

  ngOnInit(): void {
    this.servicoVendedor.listar().subscribe(
      dados=> this.vendedores = dados
    )
  }

}
