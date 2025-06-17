import { Component, inject, Input } from '@angular/core';
import { TaskListComponent } from "./task-list/task-list.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTask } from './task-list/task.model';
import { TaskService } from './user-task.service';

@Component({
  selector: 'app-user-task',
  imports: [TaskListComponent, NewTaskComponent],
  templateUrl: './user-task.component.html',
  styleUrl: './user-task.component.css'
})
export class UserTaskComponent {
  @Input({required:true}) name!: string;
  @Input({required:true}) userId!: string;
  isTaskAdded = false;

  private taskService = inject(TaskService);

  get selectedUserTasks(){
    return this.taskService.selectTask(this.userId);
  }

  onCompleteTask(taskId: string) {
    this.taskService.completeTask(taskId);
  }

  onAddTask(){
    this.isTaskAdded = true;
  }
  onCancelAddingTask(){
    this.isTaskAdded = false;
  }

  onSubmitTask(task: NewTask){
    this.taskService.addTask(task, this.userId);
    this.isTaskAdded = false;
  }


}
