import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MedicoService } from '../services/medico.service';
import { MedicoListarComponent } from './medico-listar.component';

describe('MedicoListarComponent', () => {
  let component: MedicoListarComponent;
  let fixture: ComponentFixture<MedicoListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers:[MedicoService],
      imports:[HttpClientTestingModule],
      declarations: [ MedicoListarComponent ]
    })

    .compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(MedicoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Renderizar html', ()=>{
    const expected: string = 'Lista de Médicos';
    const result = fixture.debugElement.nativeElement.querySelector('#title');
    expect(result.innerHTML).toBe(expected)
  });



});
