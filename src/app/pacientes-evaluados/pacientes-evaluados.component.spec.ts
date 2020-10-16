import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesEvaluadosComponent } from './pacientes-evaluados.component';

describe('PacientesEvaluadosComponent', () => {
  let component: PacientesEvaluadosComponent;
  let fixture: ComponentFixture<PacientesEvaluadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacientesEvaluadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientesEvaluadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
