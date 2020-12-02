import { Component, OnInit } from "@angular/core";
import { TasksService } from "../tasks.service";
import { Task } from "../task.model";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.css"]
})
export class TaskListComponent implements OnInit {
  tasks = [];

  constructor(private tasksService: TasksService) {}

  createTask() {
    this.tasksService.createTasks();
  }

  ngOnInit() {
    this.tasks = this.tasksService.getTasks();
  }
}
