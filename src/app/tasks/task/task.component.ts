import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model'; // Assuming you have a Task model defined in task.model.ts


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
@Input({ required: true })  task!: Task ;
@Output() complete = new EventEmitter<string>();

onCompleteTask() {
  this.complete.emit(this.task.id);
}
}
