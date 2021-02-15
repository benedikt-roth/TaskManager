import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'task-input-item',
  templateUrl: './task-input-item.component.html',
  styleUrls: ['./task-input-item.component.scss']
})
export class TaskInputItemComponent implements OnInit {
  @Output()
  submitTask = new EventEmitter<any>();

  taskForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.taskForm = this.fb.group({
        title: ['', Validators.required],
        expireDate: [''],
        expireTime: ['']
    })
  }

  createTask() {
    const { title, expireDate, expireTime } = this.taskForm.value;
    const date = new Date(expireDate);
    let _expireTime = expireTime || '23:59'
    const [hours, minutes] = _expireTime.split(':');
    date.setHours(hours, minutes);

    this.submitTask.emit({
        title,
        expireDate: date
    })
    this.taskForm.reset();
  }
}
