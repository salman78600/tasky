import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './task.model';
import { DatePipe } from '@angular/common';
import { CardComponent } from "../../shared/card/card.component";


@Component({
  selector: 'app-task-list',
  imports: [DatePipe, CardComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  @Input() task!: Task;
  @Output() complete = new EventEmitter<String>();

  onCompleteTask(){
    this.complete.emit(this.task.id);
  }
}
