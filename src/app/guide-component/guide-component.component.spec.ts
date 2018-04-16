import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideComponentComponent } from './guide-component.component';

describe('GuideComponentComponent', () => {
  let component: GuideComponentComponent;
  let fixture: ComponentFixture<GuideComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
