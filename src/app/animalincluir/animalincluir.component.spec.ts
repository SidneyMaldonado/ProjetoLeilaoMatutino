import { NgForm } from '@angular/forms';
import { AnimalService } from './../services/animal.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalincluirComponent } from './animalincluir.component';

describe('AnimalincluirComponent', () => {
  let component: AnimalincluirComponent;
  let fixture: ComponentFixture<AnimalincluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalincluirComponent, NgForm ],
      imports:[HttpClientTestingModule, RouterTestingModule],
      providers:[AnimalService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalincluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Deve renderizar html', () =>{
    const expected: string = 'Incluir Animal';
    const result = fixture.debugElement.nativeElement.querySelector('#title');
    expect(result.innerHTML).toBe(expected)
  });

  it('Botao Salvar', () => {
    const expected: string = 'Enviar';
    const result = fixture.debugElement.nativeElement.querySelector('#salvar');
    expect(result.innerHTML).toBe(expected)
  })


});
