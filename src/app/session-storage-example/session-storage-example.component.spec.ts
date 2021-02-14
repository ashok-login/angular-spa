import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionStorageExampleComponent } from './session-storage-example.component';

describe('SessionStorageExampleComponent', () => {
  let component: SessionStorageExampleComponent;
  let fixture: ComponentFixture<SessionStorageExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionStorageExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionStorageExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
