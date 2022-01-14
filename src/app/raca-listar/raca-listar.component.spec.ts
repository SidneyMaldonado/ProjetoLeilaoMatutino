import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RacaService } from '../services/raca.service';

import { RacaListarComponent } from './raca-listar.component';

describe('RacaListarComponent', () => {
  let component: RacaListarComponent;
  let fixture: ComponentFixture<RacaListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RacaListarComponent ],
      imports: [HttpClientTestingModule],
      providers: [RacaService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RacaListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Renderizar html', () => {
    const expected: string = 'Lista de Raças';
    const result = fixture.debugElement.nativeElement.querySelector('#title');
    expect(result.innerHTML).toBe(expected)
  });

});
