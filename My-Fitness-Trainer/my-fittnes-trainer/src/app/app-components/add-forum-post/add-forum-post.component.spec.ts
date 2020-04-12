import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddForumPostComponent } from './add-forum-post.component';

describe('AddForumPostComponent', () => {
  let component: AddForumPostComponent;
  let fixture: ComponentFixture<AddForumPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddForumPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddForumPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
