import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { LeilaoService } from '../services/leilao.service';

import { LeilaoincluirComponent } from './leilaoincluir.component';

describe('LeilaoincluirComponent', () => {
  let component: LeilaoincluirComponent;
  let fixture: ComponentFixture<LeilaoincluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeilaoincluirComponent, NgForm ],
      imports:[HttpClientTestingModule, RouterTestingModule],
      providers: [LeilaoService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeilaoincluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
