import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, NgForm } from '@angular/forms';
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
      imports:[HttpClientTestingModule, RouterTestingModule, FormsModule],
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
    console.log('Leilao listar - Teste');
    expect(result.innerHTML).toEqual(expected);
  });
});
