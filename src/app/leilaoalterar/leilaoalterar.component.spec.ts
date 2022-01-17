import { FormsModule, NgForm } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { LeilaoService } from './../services/leilao.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeilaoalterarComponent } from './leilaoalterar.component';

describe('LeilaoalterarComponent', () => {
  let component: LeilaoalterarComponent;
  let fixture: ComponentFixture<LeilaoalterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeilaoalterarComponent, NgForm ],
      imports:[HttpClientTestingModule, RouterTestingModule, FormsModule],
      providers: [LeilaoService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeilaoalterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve renderizar página HTML', () => {
    const expected : string = 'Editar Leilão';
    const result = fixture.debugElement.nativeElement.querySelector('#title');
    console.log(result.innerHTML);
    expect(result.innerHTML).toEqual(expected);
  });

  it('botao alterar', () => {
    const expected : string = 'Enviar';
    const result = fixture.debugElement.nativeElement.querySelector('#salvar');
    console.log('Leilao Alterar - Teste');
    expect(result.innerHTML).toEqual(expected);
  })
});
