import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsiVamosComponent } from './asi-vamos.component';

describe('AsiVamosComponent', () => {
  let component: AsiVamosComponent;
  let fixture: ComponentFixture<AsiVamosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsiVamosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsiVamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
