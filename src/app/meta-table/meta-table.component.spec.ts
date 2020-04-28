import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaTableComponent } from './meta-table.component';

describe('MetaTableComponent', () => {
  let component: MetaTableComponent;
  let fixture: ComponentFixture<MetaTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetaTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
