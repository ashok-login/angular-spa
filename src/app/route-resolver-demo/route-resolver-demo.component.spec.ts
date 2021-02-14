import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteResolverDemoComponent } from './route-resolver-demo.component';

describe('RouteResolverDemoComponent', () => {
  let component: RouteResolverDemoComponent;
  let fixture: ComponentFixture<RouteResolverDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteResolverDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteResolverDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
