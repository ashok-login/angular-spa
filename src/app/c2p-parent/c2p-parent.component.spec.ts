import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C2pParentComponent } from './c2p-parent.component';

describe('C2pParentComponent', () => {
  let component: C2pParentComponent;
  let fixture: ComponentFixture<C2pParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C2pParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C2pParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
