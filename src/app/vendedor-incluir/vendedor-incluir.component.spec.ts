import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendedorIncluirComponent } from './vendedor-incluir.component';

describe('VendedorIncluirComponent', () => {
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
});
