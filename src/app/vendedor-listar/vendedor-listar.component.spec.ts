import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VendedorService } from '../services/vendedor.service';

import { VendedorListarComponent } from './vendedor-listar.component';

describe('VendedorListarComponent', () => {
  let component: VendedorListarComponent;
  let fixture: ComponentFixture<VendedorListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendedorListarComponent ],
      imports:[HttpClientTestingModule],
      providers:[VendedorService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendedorListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Renderizar html', ()=>{
    const expected: string = 'Lista de Vendedores';
    const result = fixture.debugElement.nativeElement.querySelector('#title');
    expect(result.innerHTML).toBe(expected)
  });
});
