import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  title: string
  desc: string

  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();


  onSubmit(){
    const todo = {
      title: this.title,
      desc: this.desc,
      active: true
    }
    console.log(todo);
    this.addTodo.emit(todo);
  }
}

