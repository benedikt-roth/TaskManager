import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SubmitTaskModel} from '../../core/models/task.model';

@Component({
  selector: 'task-input-item',
  templateUrl: './task-input-item.component.html',
  styleUrls: ['./task-input-item.component.scss']
})

export class TaskInputItemComponent implements OnInit {
  @Output()
  submitTask = new EventEmitter<SubmitTaskModel>();

  taskForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.taskForm = this.fb.group({
        title: ['', Validators.required],
        expireDate: [''],
        expireTime: ['']
    })
  }

  createTask(): void {
    const { title, expireDate, expireTime } = this.taskForm.value;
    let expDate;
    if (expireDate) {
      expDate = new Date(expireDate);
      let expTime = expireTime || '23:59:59'
      const [hours, minutes] = expTime.split(':');
      expDate.setHours(hours, minutes);
    }

    this.submitTask.emit({
        title,
        expireDate: expDate || null
    })
    this.taskForm.reset();
  }
}
