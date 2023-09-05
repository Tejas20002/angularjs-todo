import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todos: Todo[];
  localItem: string | null;
  @Output() todosUpdate: EventEmitter<Todo> = new EventEmitter();
  constructor(private dialogRef: MatDialog){
    this.localItem = localStorage.getItem("todolist")
    if(this.localItem == null)
      this.todos = [];
    else
      this.todos = JSON.parse(this.localItem)
  }

  delete(todo: Todo){
    console.log("delete event listen")
    const index = this.todos.indexOf(todo)
    this.todos.splice(index, 1)
    localStorage.setItem("todolist", JSON.stringify(this.todos))
  }
  
  addTodo(todo: Todo){
    console.log("submit :-\n"+todo)
    this.todos.push(todo);
    localStorage.setItem("todolist", JSON.stringify(this.todos))
  }

  done(todo: Todo){
    console.log("delete event listen")
    const index = this.todos.indexOf(todo)
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todolist", JSON.stringify(this.todos))
  }

  openDialog(todo: Todo){
    this.dialogRef.open(EditComponent,{
      data: {
        title: todo.title,
        desc: todo.desc
      }
    });
  }
}
