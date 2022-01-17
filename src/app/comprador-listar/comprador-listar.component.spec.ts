import { FormsModule } from '@angular/forms';
import { CompradorService } from './../services/comprador.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CompradorListarComponent } from './comprador-listar.component';

describe('CompradorListarComponent', () => {
  let component: CompradorListarComponent;
  let fixture: ComponentFixture<CompradorListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompradorListarComponent ],
      imports:[HttpClientTestingModule, FormsModule],
      providers:[CompradorService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompradorListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Renderizar o HTML', ()=>{
    const expected: string = 'Lista de Compradores';
    const result = fixture.debugElement.nativeElement.querySelector('#title');
    console.log(result.innerHTML)
    expect(result.innerHTML).toEqual(expected)
  });


});
