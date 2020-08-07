import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAnimationComponent } from './list-animation.component';

describe('ListAnimationComponent', () => {
  let component: ListAnimationComponent;
  let fixture: ComponentFixture<ListAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
