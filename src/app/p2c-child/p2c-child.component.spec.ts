import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P2cChildComponent } from './p2c-child.component';

describe('P2cChildComponent', () => {
  let component: P2cChildComponent;
  let fixture: ComponentFixture<P2cChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P2cChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P2cChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
