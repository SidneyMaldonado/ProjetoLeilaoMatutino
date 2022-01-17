import { CompradorService } from './../services/comprador.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgForm, FormsModule } from '@angular/forms';
import { CompradorIncluirComponent } from './comprador-incluir.component';

describe('CompradorIncluirComponent', () => {
  let component: CompradorIncluirComponent;
  let fixture: ComponentFixture<CompradorIncluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompradorIncluirComponent, NgForm ],
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule],
      providers:[CompradorService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompradorIncluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('Renderizar o HTML', () => {
    const expected: string = 'Incluir Comprador';
    const result = fixture.debugElement.nativeElement.querySelector('#title');
    expect(result.innerHTML).toBe(expected)
  });

  it('Botao Salvar', () => {
    const expected: string = 'Enviar';
    const result = fixture.debugElement.nativeElement.querySelector('#enviar');
    console.log(result);
    expect(result.innerHTML).toBe(expected)
  });


});
