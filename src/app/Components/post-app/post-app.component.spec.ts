import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAppComponent } from './post-app.component';

describe('PostAppComponent', () => {
  let component: PostAppComponent;
  let fixture: ComponentFixture<PostAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
