import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CompradorService } from './../services/comprador.service';
import { NgForm } from '@angular/forms';

import { CompradorexcluirComponent } from './compradorexcluir.component';

describe('CompradorexcluirComponent', () => {
  let component: CompradorexcluirComponent;
  let fixture: ComponentFixture<CompradorexcluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompradorexcluirComponent, NgForm ],
      imports:[HttpClientTestingModule, RouterTestingModule],
      providers:[CompradorService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompradorexcluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('O componente precisa ser criado.', () => {
    expect(component).toBeTruthy();
  });

  it('Deve renderizar html.', () =>{
    const expected: string = 'Excluir Comprador';
    const result = fixture.debugElement.nativeElement.querySelector('#title');
    expect(result.innerHTML).toBe(expected)
  });

  it('Deve renderizar o Botão excluir.', () => {
    const expected: string = 'Excluir';
    const result = fixture.debugElement.nativeElement.querySelector('#excluir');
    expect(result.innerHTML).toBe(expected)
  })
});
