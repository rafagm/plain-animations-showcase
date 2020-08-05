import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationScrollComponent } from './animation-scroll.component';

describe('AnimationScrollComponent', () => {
  let component: AnimationScrollComponent;
  let fixture: ComponentFixture<AnimationScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
