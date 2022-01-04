import { CompradorService } from './../services/comprador.service';
import { Comprador } from './../entities/comprador';
import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD

=======
>>>>>>> 233860943a0656698c420d5226497a1f3f1619df

@Component({
  selector: 'app-comprador-listar',
  templateUrl: './comprador-listar.component.html',
  styleUrls: ['./comprador-listar.component.css']
})
export class CompradorListarComponent implements OnInit {

  compradores: Comprador[] = [];
  constructor(private compradorService: CompradorService) { }

  ngOnInit(): void {
    this.compradorService.listar().subscribe(
      dados=> this.compradores = dados
    )
  }

}
