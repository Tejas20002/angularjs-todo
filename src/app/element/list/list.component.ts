import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Todo } from 'src/app/Todo';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() todos: any;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoDone: EventEmitter<Todo> = new EventEmitter();
  @Output() todoUpdate: EventEmitter<Todo> = new EventEmitter();
  constructor() {

  }
  faTrash = faTrash;
  faEdit = faEdit;

  ondelete(todo: Todo) {
    console.log(todo);
    this.todoDelete.emit(todo);
  }
  
  onDone(todo: Todo){
    this.todoDone.emit(todo);
  }

  onUpdate(todo: Todo){
    // console.log(todo)
    this.todoUpdate.emit(todo);
  }
}
