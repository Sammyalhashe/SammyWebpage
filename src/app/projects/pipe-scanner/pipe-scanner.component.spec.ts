import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeScannerComponent } from './pipe-scanner.component';

describe('PipeScannerComponent', () => {
  let component: PipeScannerComponent;
  let fixture: ComponentFixture<PipeScannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeScannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeScannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
