import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdetailsComponent } from './userdetails.component';

describe('UserdetailsComponent', () => {
  let component: UserdetailsComponent;
  let fixture: ComponentFixture<UserdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserdetailsComponent]
    });
    fixture = TestBed.createComponent(UserdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
