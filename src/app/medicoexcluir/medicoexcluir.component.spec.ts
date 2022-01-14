import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MedicoService } from '../services/medico.service';
import { MedicoexcluirComponent } from './medicoexcluir.component';


describe('MedicoexcluirComponent', () => {
  let component: MedicoexcluirComponent;
  let fixture: ComponentFixture<MedicoexcluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, RouterTestingModule],
      providers:[MedicoService],
      declarations: [ MedicoexcluirComponent, NgForm ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicoexcluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Renderizar html', ()=>{
    const expected: string = 'Excluir Medicos';
    const result = fixture.debugElement.nativeElement.querySelector('#title');
    expect(result.innerHTML).toBe(expected)
  });


  it('Botao Salvar', () => {
    const expected: string = 'Excluir';
    const result = fixture.debugElement.nativeElement.querySelector('#excluir');
    expect(result.innerHTML).toBe(expected)
  })

});
