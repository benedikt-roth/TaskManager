import { Injectable } from '@angular/core';
import {TaskModel} from "../models/task.model";
import * as uuid from 'uuid';
import {BehaviorSubject} from "rxjs";
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
  private _tasks$ = new BehaviorSubject<TaskModel[]>(mockTaskItems);

  tasks$ = this._tasks$.asObservable();

  constructor() {}

  addTask(body): void {
    body.complete = false;
    body.expire = isDateExpired(body.expireDate)
    body.uuid = uuid.v4();

    const tasks = this._tasks$.getValue();
    tasks.push(body);

    this._tasks$.next(tasks);
  }

  completeTask(id: string): void {
    const tasks = this._tasks$.getValue();
    const filteredTaskItems = tasks.map(task => {
      if (task.uuid === id) {
        task.complete = true
      }
      return task;
    });

    this._tasks$.next(filteredTaskItems);
  }
}
