import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapPracticeComponent } from './bootstrap-practice.component';

describe('BootstrapPracticeComponent', () => {
  let component: BootstrapPracticeComponent;
  let fixture: ComponentFixture<BootstrapPracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapPracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
