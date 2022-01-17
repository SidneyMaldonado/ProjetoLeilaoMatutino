import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { RacaService } from '../services/raca.service';

import { RacaIncluirComponent } from './raca-incluir.component';

describe('RacaIncluirComponent', () => {
  let component: RacaIncluirComponent;
  let fixture: ComponentFixture<RacaIncluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RacaIncluirComponent, NgForm ],
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule],
      providers: [RacaService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RacaIncluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve renderizar html', () =>{
    const expected: string = 'Incluir Raça';
    const result = fixture.debugElement.nativeElement.querySelector('#title');
    expect(result.innerHTML).toBe(expected)
  });

  it('Botao Salvar', () => {
    const expected: string = 'Enviar';
    const result = fixture.debugElement.nativeElement.querySelector('#salvar');
    expect(result.innerHTML).toBe(expected)
  })
});
