import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MedicoService } from '../services/medico.service';
import { MedicoalterarComponent } from './medicoalterar.component';

describe('MedicoalterarComponent', () => {
  let component: MedicoalterarComponent;
  let fixture: ComponentFixture<MedicoalterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers:[MedicoService],
      imports:[HttpClientTestingModule, RouterTestingModule],
      declarations: [ MedicoalterarComponent , NgForm ]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicoalterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Renderizar html', ()=>{
    const expected: string = 'Alterar Medico';
    const result = fixture.debugElement.nativeElement.querySelector('#title');
    expect(result.innerHTML).toBe(expected)
  });

  it('Botao Salvar', () => {
    const expected: string = 'Enviar';
    const result = fixture.debugElement.nativeElement.querySelector('#salvar');
    expect(result.innerHTML).toBe(expected)
  });

});
