import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Medico } from '../entities/medico';
import { Mensagem } from '../entities/mensagem';
import { MedicoService } from './medico.service';


describe('MedicoService', () => {
  let service: MedicoService;
  let httpTestingController: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[MedicoService]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(MedicoService);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();

  });



  it('Teste listar()', () => {

    const medico: Medico [] = 
    [

      {
        "idMedico": 2,
        "nome": "Ricardo Serafim 1000",
        "crmv": 13441,
        "dataNascimento": new Date(),
        "telefone": "963539-4594",
        "email": "henriquelopes@artedaserra.com.br",
        "ativo": true
      }   ]

     service.listar().subscribe(data => { 
     expect(data).toEqual(medico);

     })
     
     const testRequest = httpTestingController.expectOne('http://localhost:8080/medico');
     expect(testRequest.request.method).toBe('GET');
     testRequest.flush(medico);

   });
   
   it('Test incluir()', () =>{


    const msg : Mensagem= {mensagem: '', erros:[]};
    const medico: Medico = 
    {
      
        "idMedico": 2,
        "nome": "Ricardo Serafim 1000",
        "crmv": 13441,
        "dataNascimento": new Date(),
        "telefone": "963539-4594",
        "email": "henriquelopes@artedaserra.com.br",
        "ativo": true
    }

    service.incluir(medico).subscribe(data => expect(data).toEqual(msg))

    const testRequest = httpTestingController.expectOne('http://localhost:8080/medico')
    expect(testRequest.request.method).toBe("POST")
    expect(testRequest.request.body.nome).toBe("Ricardo Serafim 1000")
    console.log('mensagem')
    console.log(testRequest.request.body)
    testRequest.flush(msg)

   });

   it('Teste buscar()', () => {


      const medico: Medico = {

        "idMedico": 2,
        "nome": "Ricardo Serafim 1000",
        "crmv": 13441,
        "dataNascimento": new Date(),
        "telefone": "963539-4594",
        "email": "henriquelopes@artedaserra.com.br",
        "ativo": true
      }
      
        service.buscar('2').subscribe(data => expect(data).toEqual(medico))

        const testRequest = httpTestingController.expectOne('http://localhost:8080/medico/2')
        expect(testRequest.request.method).toBe('GET')
        testRequest.flush(medico)

    });



    it('Teste alterar()', () => {

      const msg: Mensagem = {
        mensagem: '',
        erros: []
      }

      const medico: Medico = {

        "idMedico": 2,
        "nome": "Ricardo Serafim 1000",
        "crmv": 13441,
        "dataNascimento": new Date(),
        "telefone": "963539-4594",
        "email": "henriquelopes@artedaserra.com.br",
        "ativo": true

      }

      service.alterar(medico).subscribe( dados => expect(dados).toEqual(msg))

      const testRequest = httpTestingController.expectOne('http://localhost:8080/medico')
      expect(testRequest.request.method).toBe('PUT')
      expect(testRequest.request.body.nome).toBe('Ricardo Serafim 1000')
      console.log('Mensagem: ')
      console.log(testRequest.request.body)
      testRequest.flush(msg)

    });



    it('Test excluir()', () =>{

      const msg: Mensagem = { mensagem: '', erros: []};
      const medico: Medico = 
      {
        "idMedico": 2,
        "nome": "Ricardo Serafim 1000",
        "crmv": 13441,
        "dataNascimento": new Date(),
        "telefone": "963539-4594",
        "email": "henriquelopes@artedaserra.com.br",
        "ativo": true
      }
        
      service.excluir(medico).subscribe(
        data => expect(data).toEqual(msg)  
      )
  
      const testRequest = httpTestingController.expectOne('http://localhost:8080/medico/');
      expect(testRequest.request.method).toBe('DELETE');
      expect(testRequest.request.body.nome.idMedico).toBe('Ricardo Serafim 1000')
      console.log('Mensagem: ')
      console.log(testRequest.request.body)
      testRequest.flush(msg);

    });

});
