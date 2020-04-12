import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcerciseDetailsComponent } from './excercise-details.component';

describe('ExcerciseDetailsComponent', () => {
  let component: ExcerciseDetailsComponent;
  let fixture: ComponentFixture<ExcerciseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcerciseDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcerciseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
