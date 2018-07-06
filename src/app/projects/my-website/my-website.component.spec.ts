import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWebsiteComponent } from './my-website.component';

describe('MyWebsiteComponent', () => {
  let component: MyWebsiteComponent;
  let fixture: ComponentFixture<MyWebsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyWebsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
