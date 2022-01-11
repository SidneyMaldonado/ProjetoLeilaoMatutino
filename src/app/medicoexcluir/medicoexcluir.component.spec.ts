import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoexcluirComponent } from './medicoexcluir.component';

describe('MedicoexcluirComponent', () => {
  let component: MedicoexcluirComponent;
  let fixture: ComponentFixture<MedicoexcluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicoexcluirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicoexcluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
