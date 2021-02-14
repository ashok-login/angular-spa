import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalStorageExampleComponent } from './local-storage-example.component';

describe('LocalStorageExampleComponent', () => {
  let component: LocalStorageExampleComponent;
  let fixture: ComponentFixture<LocalStorageExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalStorageExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalStorageExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
