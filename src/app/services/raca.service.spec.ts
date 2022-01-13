import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ConnectableObservable } from 'rxjs';
import { Mensagem } from '../entities/mensagem';
import { Raca } from '../entities/raca';

import { RacaService } from './raca.service';

describe('RacaService', () => {
  let service: RacaService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RacaService]
    });
    service = TestBed.inject(RacaService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('O componente precisa ser criado.', () => {
    expect(service).toBeTruthy();
  });

  it('Test listar()', () =>{

    const raca: Raca[] = [
      {
            "idRaca": 14,
            "nome": "Nova Raça",
            "descricao": "Boi 300 kg.",
            "ativo": true
      }]

      service.listar().subscribe(data => {
        expect(data).toEqual(raca);
      })

      const testRequest = httpTestingController.expectOne('http://localhost:8080/raca');
      expect(testRequest.request.method).toBe('GET');
      testRequest.flush(raca);
  });

  it('Test incluir()', () =>{

    const msg: Mensagem = { mensagem: '', erros: []};
    const raca: Raca =  
    {
      "idRaca": 20,
      "nome": "Angus 2.0",
      "descricao": "Boi 300 kg.",
      "ativo": true
    }

    service.incluir(raca).subscribe(
      data => expect(data).toEqual(msg)
    )

    const testRequest = httpTestingController.expectOne('http://localhost:8080/raca')
    expect(testRequest.request.method).toBe('POST')
    expect(testRequest.request.body.nome).toBe('Angus 2.0')
    console.log('Mensagem: ')
    console.log(testRequest.request.body)
    testRequest.flush(msg)  
  });

  it('Test buscar()', () =>{ 

    const msg: Mensagem = { mensagem: '', erros: []};
    const raca: Raca = 
    {
      "idRaca": 18,
      "nome": "Red Angus",
      "descricao": "Boi 300 kg.",
      "ativo": true
    }

    service.buscar('18').subscribe(
      data => expect(data).toEqual(raca)
    )
    
    const testRequest = httpTestingController.expectOne('http://localhost:8080/raca/18');
    expect(testRequest.request.method).toBe('GET');
    testRequest.flush(raca);
  });

  it('Test excluir()', () =>{

    const msg: Mensagem = { mensagem: '', erros: []};
    const raca: Raca = 
    {
      "idRaca": 18,
      "nome": "Red Angus",
      "descricao": "Boi 300 kg.",
      "ativo": false
    }

    service.excluir(raca).subscribe(
      data => expect(data).toEqual(msg)  
    )

    const testRequest = httpTestingController.expectOne('http://localhost:8080/raca');
    expect(testRequest.request.method).toBe('DELETE');
    expect(testRequest.request.body.nome.idRaca).toBe('Red Angus.18')
    console.log('Mensagem: ')
    console.log(testRequest.request.body)
    testRequest.flush(msg);
    });

});
