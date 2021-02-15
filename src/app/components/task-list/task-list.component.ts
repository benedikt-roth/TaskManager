import {Component} from '@angular/core';
import {TaskService} from "../../core/services/task.service";
import {TaskModel} from "../../core/models/task.model";
import {Observable} from "rxjs";

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  tasks$: Observable<TaskModel[]> = this.taskService.tasks$;

  constructor(private taskService: TaskService) { }

  handleTaskSubmit(task: any): void {
    this.taskService.addTask(task);
  }

  handleTaskComplete(id: string): void {
    this.taskService.completeTask(id);
  }
}
