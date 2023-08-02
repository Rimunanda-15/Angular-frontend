import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryInputComponent } from './category-input.component';

describe('CategoryInputComponent', () => {
  let component: CategoryInputComponent;
  let fixture: ComponentFixture<CategoryInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryInputComponent]
    });
    fixture = TestBed.createComponent(CategoryInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
