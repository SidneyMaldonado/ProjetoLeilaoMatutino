import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendedorIncluirComponent } from './vendedorincluir.component';

describe('VendedorincluirComponent', () => {
  let component: VendedorIncluirComponent;
  let fixture: ComponentFixture<VendedorIncluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendedorIncluirComponent ]
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
  it('Deve renderizar html', () =>{
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
