import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PEvaluadosComponent } from './p-evaluados.component';

describe('PEvaluadosComponent', () => {
  let component: PEvaluadosComponent;
  let fixture: ComponentFixture<PEvaluadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PEvaluadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PEvaluadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
