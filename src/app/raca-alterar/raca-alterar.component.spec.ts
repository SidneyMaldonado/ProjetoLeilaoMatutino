import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacaAlterarComponent } from './raca-alterar.component';

describe('RacaAlterarComponent', () => {
  let component: RacaAlterarComponent;
  let fixture: ComponentFixture<RacaAlterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RacaAlterarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RacaAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
