import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoalterarComponent } from './medicoalterar.component';

describe('MedicoalterarComponent', () => {
  let component: MedicoalterarComponent;
  let fixture: ComponentFixture<MedicoalterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicoalterarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicoalterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
