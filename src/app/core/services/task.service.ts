import { Injectable } from '@angular/core';
import {TaskModel} from "../models/task.model";
import * as uuid from 'uuid';
import {BehaviorSubject, Observable} from "rxjs";
import {isDateExpired} from '../utils'
const mockTaskItems: TaskModel[] =
  [
    {
      title: 'First task',
      expireDate: null,
      expire: false,
      complete: false,
      uuid: uuid.v4()
    },
    {
      title: 'Second task',
      expireDate: new Date('2020-10-10'),
      expire: true,
      complete: false,
      uuid: uuid.v4()
    },
    {
      title: 'Last task',
      expireDate: new Date('2021-10-10'),
      expire: false,
      complete: false,
      uuid: uuid.v4()
    }
  ];

@Injectable()
export class TaskService {
  private _taskItems$ = new BehaviorSubject<TaskModel[]>(mockTaskItems);

  taskItem = this._taskItems$.asObservable();

  constructor() {}

  getTasks(): Observable<TaskModel[]> {
    return this.taskItem;
  }

  addTask(body): void {
    body.complete = false;
    body.expire = isDateExpired(body.expireDate)
    body.uuid = uuid.v4();

    const taskItems = this._taskItems$.getValue();
    taskItems.push(body);
    this._taskItems$.next(taskItems);
  }

  completeTask(id: string) {
    const taskItems = this._taskItems$.getValue();
    const filteredTaskItems = taskItems.map(task => {
      if (task.uuid === id) {
        task.complete = true
      }
      return task;
    });
    this._taskItems$.next(filteredTaskItems);
  }
}
