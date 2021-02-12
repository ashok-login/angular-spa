import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusControlOnPageLoadComponent } from './focus-control-on-page-load.component';

describe('FocusControlOnPageLoadComponent', () => {
  let component: FocusControlOnPageLoadComponent;
  let fixture: ComponentFixture<FocusControlOnPageLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FocusControlOnPageLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FocusControlOnPageLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
