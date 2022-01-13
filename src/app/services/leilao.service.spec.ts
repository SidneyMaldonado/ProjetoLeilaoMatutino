import { Leilao } from './../entities/leilao';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { LeilaoService } from './leilao.service';
import { Mensagem } from '../entities/mensagem';

describe('LeilaoService', () => {
  let service: LeilaoService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
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
    console.log('Mensagem:')
    console.log(testRequest.request.body)
    testRequest.flush(msg)
  })

  // -------------TESTE BUSCAR------------------
  it('Busca deve retornar leilao correto'), () => {
    const leilao : Leilao = {
      idLeilao: 0,
      nome: '',
      descricao: '',
      data: new Date(),
      ativo: false
    }

    service.buscar('3').subscribe(
      data => expect(data).toEqual(leilao)
    )
    const testRequest = httpTestingController.expectOne('http://localhost:8080/leilao/');
    expect(testRequest.request.method).toBe('GET');
    testRequest.flush(leilao);
  }
});
