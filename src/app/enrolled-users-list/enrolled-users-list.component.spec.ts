import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolledUsersListComponent } from './enrolled-users-list.component';

describe('EnrolledUsersListComponent', () => {
  let component: EnrolledUsersListComponent;
  let fixture: ComponentFixture<EnrolledUsersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrolledUsersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrolledUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
