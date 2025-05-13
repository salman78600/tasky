import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../task-list/task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  title:string = '';
  summary:string = '';
  date:string = '';

  @Output() onCancel = new EventEmitter<void>();
  @Output() addTask = new EventEmitter<NewTask>();

  onCancelTask(){
    this.onCancel.emit();
  }
  onSubmit(){
    this.addTask.emit({
      title: this.title,
      summary: this.summary, 
      date: this.date})
  }
}
