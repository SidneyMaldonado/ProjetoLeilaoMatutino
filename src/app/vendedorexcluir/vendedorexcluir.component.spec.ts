import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendedorexcluirComponent } from './vendedorexcluir.component';

describe('VendedorexcluirComponent', () => {
  let component: VendedorexcluirComponent;
  let fixture: ComponentFixture<VendedorexcluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendedorexcluirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendedorexcluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Deve renderizar html', () =>{
    const expected: string = 'Excluir Vendedor';
    const result = fixture.debugElement.nativeElement.querySelector('#title');
    expect(result.innerHTML).toBe(expected)
  });

  it('Botao Salvar', () => {
    const expected: string = 'Excluir';
    const result = fixture.debugElement.nativeElement.querySelector('#excluir');
    expect(result.innerHTML).toBe(expected)
  })
});
