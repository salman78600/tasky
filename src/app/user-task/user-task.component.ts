import { Component, Input } from '@angular/core';
import { TaskListComponent } from "./task-list/task-list.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTask } from './task-list/task.model';

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

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  get selectedUserTasks(){
    return this.tasks.filter(task => task.userId === this.userId);
  }

  onCompleteTask(taskId: string) {
    console.log('Task completed:', taskId);
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

  onAddTask(){
    this.isTaskAdded = true;
  }
  onCancelAddingTask(){
    this.isTaskAdded = false;
  }

  onSubmitTask(task: NewTask){
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: task.title,
      summary: task.summary,
      dueDate: task.date,
    });
    this.isTaskAdded = false;

  }


}
