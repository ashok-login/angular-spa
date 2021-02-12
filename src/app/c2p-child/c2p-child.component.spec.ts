import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C2pChildComponent } from './c2p-child.component';

describe('C2pChildComponent', () => {
  let component: C2pChildComponent;
  let fixture: ComponentFixture<C2pChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C2pChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C2pChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
