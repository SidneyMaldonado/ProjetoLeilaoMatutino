import { RouterTestingModule } from '@angular/router/testing';
import { NgForm } from '@angular/forms';
import { LeilaoService } from './../services/leilao.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeilaoListarComponent } from './leilao-listar.component';

describe('LeilaoListarComponent', () => {
  let component: LeilaoListarComponent;
  let fixture: ComponentFixture<LeilaoListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeilaoListarComponent, NgForm ],
      imports:[HttpClientTestingModule, RouterTestingModule],
      providers: [LeilaoService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeilaoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve renderizar página HTML', () => {
    const expected : string = 'Lista de Leilões';
    const result = fixture.debugElement.nativeElement.querySelector('#title');
    console.log(result.innerHTML);
    expect(result.innerHTML).toEqual(expected);
  });

  it('Renderizar botao de alterar', () => {
    const expected: string = 'Alterar';
    const result = fixture.debugElement.nativeElement.querySelector('#botoes');
    console.log(fixture.debugElement.nativeElement.querySelector('#botoes'));
    expect(result.innerHTML).toBe(expect);
  })

  it('Renderizar botao de excluir', () => {
    const expected: string = 'Excluir';
    const result = fixture.debugElement.nativeElement.querySelector('#excluir');
    expect(result.innerHTML).toBe(expect);
  })
});
