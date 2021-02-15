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
        expireDate: ['']
    })
  }

  createTask() {
    const { title, expireDate } = this.taskForm.value;

    this.submitTask.emit({ title, expireDate: expireDate || null })
    this.taskForm.reset();
  }
}
