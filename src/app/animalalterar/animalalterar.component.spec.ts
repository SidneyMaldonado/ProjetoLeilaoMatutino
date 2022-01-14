import { RouterTestingModule } from '@angular/router/testing';
import { AnimalService } from './../services/animal.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimalalterarComponent } from './animalalterar.component';
import { NgForm } from '@angular/forms';

describe('AnimalalterarComponent', () => {
  let component: AnimalalterarComponent;
  let fixture: ComponentFixture<AnimalalterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalalterarComponent, NgForm ],
      imports:[HttpClientTestingModule, RouterTestingModule],
      providers:[AnimalService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalalterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve renderizar html', () =>{
    const expected: string = 'Alterar Animal';
    const result = fixture.debugElement.nativeElement.querySelector('#title');
    expect(result.innerHTML).toBe(expected)
  });

  it('Botao Salvar', () => {
    const expected: string = 'Enviar';
    const result = fixture.debugElement.nativeElement.querySelector('#salvar');
    expect(result.innerHTML).toBe(expected)
  })


});
