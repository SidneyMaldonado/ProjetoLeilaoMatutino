import { NgForm } from '@angular/forms';
import { LeilaoService } from './../services/leilao.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeilaoexcluirComponent } from './leilaoexcluir.component';

describe('LeilaoexcluirComponent', () => {
  let component: LeilaoexcluirComponent;
  let fixture: ComponentFixture<LeilaoexcluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeilaoexcluirComponent, NgForm],
      imports:[HttpClientTestingModule, RouterTestingModule],
      providers: [LeilaoService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeilaoexcluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve renderizar página HTML', () => {
    const expected : string = 'Excluir Leilão';
    const result = fixture.debugElement.nativeElement.querySelector('#title');
    console.log(result.innerHTML);
    expect(result.innerHTML).toEqual(expected);
  });

  it('Botao Enviar', () => {
    const expected: string = 'Excluir';
    const result = fixture.debugElement.nativeElement.querySelector('#excluir');
    expect(result.innerHTML).toBe(expected)
  });

});
