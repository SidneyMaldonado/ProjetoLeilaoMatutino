import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CompradorService } from './../services/comprador.service';
import { RouterTestingModule } from '@angular/router/testing';
import { NgForm } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompradoralterarComponent } from './compradoralterar.component';

describe('CompradoralterarComponent', () => {
  let component: CompradoralterarComponent;
  let fixture: ComponentFixture<CompradoralterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompradoralterarComponent, NgForm ],
      imports:[HttpClientTestingModule, RouterTestingModule],
      providers:[CompradorService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompradoralterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('O componente precisa ser criado.', () => {
    expect(component).toBeTruthy();
  });

  it('Deve renderizar o html', ()=>{
    const expected: string = 'Alterar Comprador';
    const result = fixture.debugElement.nativeElement.querySelector('#title');
    expect(result.innerHTML).toBe(expected);
  });

  it('Botao salvar', ()=>{
    const expected: string = 'Enviar';
    const result = fixture.debugElement.nativeElement.querySelector('#salvar');
    expect(result.innerHTML).toBe(expected);
  });




});
