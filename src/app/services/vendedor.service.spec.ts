import { TestBed } from '@angular/core/testing';
import { Vendedor } from '../entities/vendedor';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';

import { VendedorService } from './vendedor.service';
import { Mensagem } from '../entities/mensagem';

describe('VendedorService', () => {
  let httpTestingController: HttpTestingController;
  let service: VendedorService;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[VendedorService]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(VendedorService);
  });

  it('O componente precisa ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('Test Listar', () =>{
    
    const vendedores: Vendedor[] = [
      {
        "idVendedor": 2,
        "nome": "Murilo Manuel Martins",
        "cpf": "62659505845",
        "dataNascimento": new Date(),
        "telefone": "67992486572",
        "email": "Murilo@gmail.com",
        "ativo": true
      }     ]

    service.listar().subscribe( data => {
      expect(data).toEqual(vendedores);
    })

    const testRequest = httpTestingController.expectOne('http://localhost:8080/vendedor');
    expect(testRequest.request.method).toBe('GET');
    testRequest.flush(vendedores);
  });

  it('Test incluir()', ()=>{

    const msg : Mensagem= { mensagem: '', erros: []};
    const vendedor: Vendedor = 
      {
        "idVendedor": 2,
        "nome": "Murilo Manuel Martins",
        "cpf": "62659505845",
        "dataNascimento": new Date(),
        "telefone": "67992486572",
        "email": "Murilo@gmail.com",
        "ativo": true
      }

    service.incluir(vendedor).subscribe(
      data => expect(data).toEqual(msg)
    )

    const testRequest = httpTestingController.expectOne('http://localhost:8080/vendedor')
    expect(testRequest.request.method).toBe('POST')
    expect(testRequest.request.body.nome).toBe('Murilo Manuel Martins')
    console.log('Mensagem:')
    console.log(testRequest.request.body)
    testRequest.flush(msg) 
    
  });

  it('Teste buscar()', ()=>{
    const vendedor: Vendedor = 
    {
      "idVendedor": 2,
      "nome": "Murilo Manuel Martins",
      "cpf": "62659505845",
      "dataNascimento": new Date(),
      "telefone": "67992486572",
      "email": "Murilo@gmail.com",
      "ativo": true
    }

    service.buscar('2').subscribe(
      data => expect(data).toEqual(vendedor)
    )
    const testRequest = httpTestingController.expectOne('http://localhost:8080/vendedor/2');
    expect(testRequest.request.method).toBe('GET');
    testRequest.flush(vendedor);

  });

  it('Test Alterar()', () => {

    const msg: Mensagem = {
      mensagem: '',
      erros: []
    }
    const vendedor: Vendedor = 
    {
      "idVendedor": 2,
      "nome": "Murilo Manuel Martins",
      "cpf": "62659505845",
      "dataNascimento": new Date(),
      "telefone": "67992486572",
      "email": "Murilo@gmail.com",
      "ativo": true
    }

    service.alterar(vendedor).subscribe(
      dados => expect(dados).toEqual(msg)
    )
    
    const testRequest = httpTestingController.expectOne('http://localhost:8080/vendedor')
    expect(testRequest.request.method).toBe('PUT')
    expect(testRequest.request.responseType).toEqual('json')
    expect(testRequest.request.body.nome).toBe('Murilo Manuel Martins')
    testRequest.flush(msg) 
    httpTestingController.verify();

  });

  it('Test Excluir()', () =>{

    const msg: Mensagem = { mensagem: '', erros: []};
    const vendedor: Vendedor = 
    {
      "idVendedor": 2,
      "nome": "Murilo Manuel Martins",
      "cpf": "62659505845",
      "dataNascimento": new Date(),
      "telefone": "67992486572",
      "email": "Murilo@gmail.com",
      "ativo": true
    }
      
    service.excluir(vendedor).subscribe(
      data => expect(data).toEqual(msg)  
    )

    const testRequest = httpTestingController.expectOne('http://localhost:8080/vendedor/2');
    expect(testRequest.request.method).toBe('DELETE');
    expect(testRequest.request.responseType).toBe('json');
    testRequest.flush(msg);

  });

});
