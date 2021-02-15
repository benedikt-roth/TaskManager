import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {TaskService} from "../../core/services/task.service";
import {TaskModel} from "../../core/models/task.model";
import {Observable} from "rxjs";

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  taskList$: Observable<TaskModel[]>;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskList$ = this.taskService.getTasks();
  }

  handleTaskSubmit(task: any): void {
    this.taskService.addTask(task);
  }

  handleTaskComplete(id: string) {
    this.taskService.completeTask(id);
  }
}
