import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementFrameComponent } from './element-frame.component';

describe('ElementFrameComponent', () => {
  let component: ElementFrameComponent;
  let fixture: ComponentFixture<ElementFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
