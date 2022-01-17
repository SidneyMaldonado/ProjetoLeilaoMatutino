import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { VendedorService } from '../services/vendedor.service';

import { VendedoralterarComponent } from './vendedoralterar.component';

describe('VendedoralterarComponent', () => {
  let component: VendedoralterarComponent;
  let fixture: ComponentFixture<VendedoralterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendedoralterarComponent, NgForm],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [VendedorService]
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


  it('Botao Enviar', () => {
    const expected: string = 'Enviar';
    const result = fixture.debugElement.nativeElement.querySelector('#enviar');
    expect(result.innerHTML).toBe(expected)
  })
});
