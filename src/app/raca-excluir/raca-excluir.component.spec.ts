import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacaExcluirComponent } from './raca-excluir.component';

describe('RacaExcluirComponent', () => {
  let component: RacaExcluirComponent;
  let fixture: ComponentFixture<RacaExcluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RacaExcluirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RacaExcluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
