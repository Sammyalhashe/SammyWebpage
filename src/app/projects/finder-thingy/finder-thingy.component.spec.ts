import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinderThingyComponent } from './finder-thingy.component';

describe('FinderThingyComponent', () => {
  let component: FinderThingyComponent;
  let fixture: ComponentFixture<FinderThingyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinderThingyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinderThingyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
