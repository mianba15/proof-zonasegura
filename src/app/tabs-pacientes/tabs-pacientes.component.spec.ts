import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsPacientesComponent } from './tabs-pacientes.component';

describe('TabsPacientesComponent', () => {
  let component: TabsPacientesComponent;
  let fixture: ComponentFixture<TabsPacientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsPacientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
