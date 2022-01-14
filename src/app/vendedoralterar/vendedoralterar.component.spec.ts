import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendedoralterarComponent } from './vendedoralterar.component';

describe('VendedoralterarComponent', () => {
  let component: VendedoralterarComponent;
  let fixture: ComponentFixture<VendedoralterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendedoralterarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendedoralterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve renderizar html', () =>{
    const expected: string = 'Alterar Vendedor';
    const result = fixture.debugElement.nativeElement.querySelector('#title');
    expect(result.innerHTML).toBe(expected)
  });

  it('Botao Salvar', () => {
    const expected: string = 'Enviar';
    const result = fixture.debugElement.nativeElement.querySelector('#salvar');
    expect(result.innerHTML).toBe(expected)
  })
});
