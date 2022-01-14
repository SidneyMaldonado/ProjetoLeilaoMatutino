import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AnimalService } from './../services/animal.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimalListarComponent } from './animal-listar.component';

describe('AnimalListarComponent', () => {
  let component: AnimalListarComponent;
  let fixture: ComponentFixture<AnimalListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalListarComponent ],
      imports:[HttpClientTestingModule],
      providers:[AnimalService]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Renderizar html', ()=>{
    const expected: string = 'Lista de Animais';
    const result = fixture.debugElement.nativeElement.querySelector('#title');
    expect(result.innerHTML).toBe(expected);
  });




});
