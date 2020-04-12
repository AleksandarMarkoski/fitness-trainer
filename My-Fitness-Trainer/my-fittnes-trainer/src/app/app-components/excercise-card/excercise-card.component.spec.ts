import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcerciseCardComponent } from './excercise-card.component';

describe('ExcerciseCardComponent', () => {
  let component: ExcerciseCardComponent;
  let fixture: ComponentFixture<ExcerciseCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcerciseCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcerciseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
