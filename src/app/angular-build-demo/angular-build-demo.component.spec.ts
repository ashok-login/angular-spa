import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularBuildDemoComponent } from './angular-build-demo.component';

describe('AngularBuildDemoComponent', () => {
  let component: AngularBuildDemoComponent;
  let fixture: ComponentFixture<AngularBuildDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularBuildDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularBuildDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
