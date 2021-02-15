import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskInputItemComponent } from './task-input-item.component';

describe('TaskAddItemComponent', () => {
  let component: TaskInputItemComponent;
  let fixture: ComponentFixture<TaskInputItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskInputItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskInputItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
