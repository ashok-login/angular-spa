import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P2cParentComponent } from './p2c-parent.component';

describe('P2cParentComponent', () => {
  let component: P2cParentComponent;
  let fixture: ComponentFixture<P2cParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P2cParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P2cParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
