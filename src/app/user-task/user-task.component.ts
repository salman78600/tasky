import { Component, Input } from '@angular/core';
import { TaskListComponent } from "./task-list/task-list.component";

@Component({
  selector: 'app-user-task',
  imports: [TaskListComponent],
  templateUrl: './user-task.component.html',
  styleUrl: './user-task.component.css'
})
export class UserTaskComponent {
  @Input({required:true}) name!: string;
}
