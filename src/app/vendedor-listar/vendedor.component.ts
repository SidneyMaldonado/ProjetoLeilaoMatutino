import { Component, OnInit } from '@angular/core';
import { Vendedor } from '../entities/vendedor';
import { VendedorService } from '../services/vendedor.service';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.css']
})
export class VendedorComponent implements OnInit {

  vendedores: Vendedor[] = []
  constructor( private servicoVendedor: VendedorService) { }

  ngOnInit(): void {
    this.servicoVendedor.listar().subscribe(
      dados=> this.vendedores = dados
    )
  }
}
