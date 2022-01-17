import { VendedorService } from './../services/vendedor.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { VendedorIncluirComponent } from './vendedorincluir.component';
import { NgForm } from '@angular/forms';

describe('VendedorincluirComponent', () => {
  let component: VendedorIncluirComponent;
  let fixture: ComponentFixture<VendedorIncluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendedorIncluirComponent, NgForm ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers:[VendedorService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendedorIncluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('Renderizar o HTML', () => {
    const expected: string = 'Incluir Vendedor';
    const result = fixture.debugElement.nativeElement.querySelector('#title');
    expect(result.innerHTML).toBe(expected)
  });

  it('Botao Salvar', () => {
    const expected: string = 'Enviar';
    const result = fixture.debugElement.nativeElement.querySelector('#salvar');
    expect(result.innerHTML).toBe(expected)
  })
});
