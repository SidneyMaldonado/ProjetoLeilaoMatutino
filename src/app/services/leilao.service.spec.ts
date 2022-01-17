import { Leilao } from './../entities/leilao';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { LeilaoService } from './leilao.service';
import { Mensagem } from '../entities/mensagem';

describe('LeilaoService', () => {
  let service: LeilaoService;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[LeilaoService]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(LeilaoService);
  });

  // -------------TESTE DE CRIACAO------------------
  it('Deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  // -------------TESTE LISTAR------------------
  it ('Test listar()', () => {
    const leilao : Leilao[] = [
      {
      "idLeilao": 1,
      "nome": "DER Leiloes",
      "descricao": "Leilao de gado bovino",
      "data": new Date(),
      "ativo": true
    }]

    service.listar().subscribe( data => {
        expect(data).toEqual(leilao);
    })

    const testRequest = httpTestingController.expectOne('http://localhost:8080/leilao');
    expect(testRequest.request.method).toBe('GET');
    testRequest.flush(leilao);
  });


  // -------------TESTE INCLUSÃO------------------
  it('Teste de inclusão', () => {
    let msg : Mensagem = {mensagem: '', erros: []};
    const leilao : Leilao = {
      "idLeilao": 1,
      "nome": "DER Leiloes",
      "descricao": "Leilao de gado bovino",
      "data": new Date(),
      "ativo": true
    }

    service.incluir(leilao).subscribe(
      data => expect(data).toEqual(msg)
    )

    const testRequest = httpTestingController.expectOne('http://localhost:8080/leilao')
    expect(testRequest.request.method).toBe('POST')
    expect(testRequest.request.body.nome).toBe('DER Leiloes')
    console.log('Leilao Service - Teste de inclusão')
    testRequest.flush(msg)
  });

  // -------------TESTE BUSCAR------------------
  it('Teste buscar()', () => {
    const date = new Date('2021-12-20T04:00:00.000+00:00');
    const leilao : Leilao = {
      "idLeilao": 3,
      "nome": "Mil Tec Leiloes",
      "descricao": "Leilao de bois nelores",
      "data": date,
      "ativo": true
    };

    service.buscar(leilao.idLeilao+"").subscribe(
      data => expect(data).toEqual(leilao)
    )
    const testRequest = httpTestingController.expectOne('http://localhost:8080/leilao/3');
    console.log('Leilao Service - Teste de busca')
    expect(testRequest.request.method).toBe('GET')
    expect(testRequest.request.responseType).toEqual('json')
  });

  // -------------TESTE ALTERAR------------------
  it('Teste de alterar', () => {
    const msg: Mensagem = {
      mensagem: '',
      erros: []
    }

    const leilao : Leilao =
      {
      "idLeilao": 1,
      "nome": "DER Leiloes",
      "descricao": "Leilao de gado bovino",
      "data": new Date(),
      "ativo": true
    }

    service.alterar(leilao).subscribe(
      dados => expect(dados).toEqual(msg)
    )

    const testRequest = httpTestingController.expectOne('http://localhost:8080/leilao');
    expect(testRequest.request.method).toBe('PUT');
    expect(testRequest.request.body.nome).toBe('DER Leiloes');
    expect(testRequest.request.responseType).toBe('json');
    console.log('Leilao Service - Teste de alteracao')
    testRequest.flush(msg);
  });

  // -------------TESTE EXCLUIR------------------
  it('excluir()', () =>{

    const msg: Mensagem = { mensagem: '', erros: []};
    const leilao: Leilao = {
      idLeilao: 3,
      nome: 'Mil Tec Leiloes',
      descricao: 'eilao de bois nelores',
      data: new Date(),
      ativo: true
    }

    service.excluir(leilao).subscribe(
      data => expect(data).toEqual(msg)
    )

    const testRequest = httpTestingController.expectOne('http://localhost:8080/leilao/3');
    expect(testRequest.request.method).toBe('DELETE');
    expect(testRequest.request.responseType).toBe('json');
    console.log('Leilao Service - Teste de exclusão')
    testRequest.flush(msg);

  });
});
