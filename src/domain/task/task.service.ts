import { Injectable } from "@nestjs/common";
import { Task, TasksList } from "./task.model";

@Injectable()
export class TaskService {

  private readonly tasks : Task[] = TasksList

  findAll(): Task[] {
    return this.tasks;
  }
  create(task: Task): Task {
    this.tasks.push(task);
    return task;
  }
  delete(id: number): Task {
    const task = this.tasks.find(task => task.id === id);
    this.tasks.splice(this.tasks.indexOf(task), 1);
    return task;
  }
  update(id: number, task: Task): Task {
    const index = this.tasks.findIndex(task => task.id === id);
    this.tasks[index] = task;
    return task;
  }
}
