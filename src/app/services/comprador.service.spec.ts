import { Comprador } from './../entities/comprador';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { CompradorService } from './comprador.service';
import { Mensagem } from './../entities/mensagem';

describe('CompradorService', () => {
  let httpTestingController: HttpTestingController;
  let service: CompradorService;

  beforeEach(() => {
    TestBed.configureTestingModule({

      imports:[HttpClientTestingModule],
      providers:[CompradorService]

    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(CompradorService);
  });

  it('O componente precisa ser criado.', () => {
    expect(service).toBeTruthy();
  });


  it('Test listar()', () =>{

    const compradores: Comprador[] = [
      {

        "idComprador": 29,
        "nome": "Henrique teste",
        "cpf": "44444444444",
        "dataNascimento": new Date(),
        "telefone": "+5567998458736",
        "email": "lHenriqueLopes42@usp.br",
        "idLeilao": 2,
        "ativo": true

    }]

    service.listar().subscribe( data => {
      expect(data).toEqual(compradores);
    })

    const testRequest = httpTestingController.expectOne('http://localhost:8080/comprador');
    expect(testRequest.request.method).toBe('GET');
    testRequest.flush(compradores);
  });



  it('Test incluir()', ()=>{

    const msg : Mensagem= { mensagem: '', erros: []};
    const comprador: Comprador =
      {
        "idComprador": 29,
        "nome": "Henrique teste",
        "cpf": "44444444444",
        "dataNascimento": new Date(),
        "telefone": "+5567998458736",
        "email": "lHenriqueLopes42@usp.br",
        "idLeilao": 2,
        "ativo": true
      }

      service.incluir(comprador).subscribe(
        data => expect(data).toEqual(msg)
      )

      const testRequest = httpTestingController.expectOne('http://localhost:8080/comprador');
      expect(testRequest.request.method).toBe('POST')
      expect(testRequest.request.body.nome).toBe('Henrique teste')

      //imprimir Msgs
      console.log(testRequest.request.body)
      testRequest.flush(msg)

  });


  it('Teste buscar()', ()=>{

    const comprador: Comprador =
      {
        "idComprador": 29,
        "nome": "Henrique teste",
        "cpf": "44444444444",
        "dataNascimento": new Date("1998-07-20T04:00:00.000+00:00"),
        "telefone": "+5567998458736",
        "email": "lHenriqueLopes42@usp.br",
        "idLeilao": 2,
        "ativo": true
      }

      service.buscar('29').subscribe(
        data => expect(data).toEqual(comprador)
      )

      const testRequest = httpTestingController.expectOne('http://localhost:8080/comprador/'+ comprador.idComprador);
      expect(testRequest.request.method).toBe('GET')
      //expect(testRequest.request.body).toEqual(comprador)
      testRequest.flush(comprador);

  });





});
