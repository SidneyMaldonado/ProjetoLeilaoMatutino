import { Mensagem } from './../entities/mensagem';
import { Animal } from './../entities/animal';
import { TestBed } from '@angular/core/testing';
import { AnimalService } from './animal.service';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';

describe('AnimalService', () => {
  let service: AnimalService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[AnimalService]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(AnimalService);
  });

  it('O componente precisa ser criado.', () => {
    expect(service).toBeTruthy();
  });


  it('Test listar()', () =>{

    const animais: Animal[] = [
      {
        "idAnimal": 3,
        "nome": "Boizaoasdasdaasdad",
        "registro": "GLT59483",
        "preco": 4200.0,
        "idRaca": 3,
        "idVendedor": 3,
        "idComprador": 3,
        "idMedico": 3,
        "pesoArroba": 140.0,
        "idade": 3,
        "idLeilao": 3,
        "ativo": true
      }    ]

    service.listar().subscribe( data => {
      expect(data).toEqual(animais);
    })

    const testRequest = httpTestingController.expectOne('http://localhost:8080/animal');
    expect(testRequest.request.method).toBe('GET');
    testRequest.flush(animais);
  });

  it('Test incluir()', ()=>{

<<<<<<< HEAD
    const msg : Mensagem= { mensagem: '', erros: []};
    const animal: Animal =
=======
    let msg : Mensagem= { mensagem: '', erros: []};
    let animal: Animal = 
>>>>>>> dd3ba54 (Ajustes)
      {
        "idAnimal": 3,
        "nome": "BBBBBBBBBBBBBBBB",
        "registro": "645897",
        "preco": 4200.0,
        "idRaca": 3,
        "idVendedor": 3,
        "idComprador": 3,
        "idMedico": 3,
        "pesoArroba": 140.0,
        "idade": 3,
        "idLeilao": 3,
        "ativo": true
      }

    service.incluir(animal).subscribe(
      data => expect(data).toEqual(msg)
    )

    const testRequest = httpTestingController.expectOne('http://localhost:8080/animal')
    expect(testRequest.request.method).toBe('POST')
    expect(testRequest.request.body.nome).toBe('BBBBBBBBBBBBBBBB')
<<<<<<< HEAD
    console.log('Mensagem:')
    console.log(testRequest.request.body)
    testRequest.flush(msg)

  });

  it('Teste buscar()', ()=>{
    const animal: Animal =
=======
    testRequest.flush(msg) 
    
  });

  it('Teste buscar()', ()=>{
    let animal: Animal = 
>>>>>>> dd3ba54 (Ajustes)
    {
      "idAnimal": 3,
      "nome": "Boizaoasdasdaasdad",
      "registro": "645897",
      "preco": 4200.0,
      "idRaca": 3,
      "idVendedor": 3,
      "idComprador": 3,
      "idMedico": 3,
      "pesoArroba": 140.0,
      "idade": 3,
      "idLeilao": 3,
      "ativo": true
    }

    service.buscar('3').subscribe(
      data => expect(data.nome).toEqual(animal.nome)
    )

    const testRequest = httpTestingController.expectOne('http://localhost:8080/animal/3')
    expect(testRequest.request.method).toBe('GET')
    expect(testRequest.request.responseType).toEqual('json')
    testRequest.flush(animal) 
    httpTestingController.verify();
  });

});
