import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Task } from "./task.model";

@Injectable()
export class TasksService {
  tasks: Task[] = [];

  constructor(private http: HttpClient) {}

  getTasks() {
    return this.tasks;
  }

  createTasks() {
    // this.tasks.push("nova tarefa");
    // this.http.post('https://ddd', task)
  }

  completeTask(id) {}
}
