import { Component, Input, OnInit } from '@angular/core';
import { ITodo } from '../interfaces/todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  public todos: ITodo[];

  constructor(private _todoService: TodoService) {}

  ngOnInit(): void {
    this._todoService
      .todos()
      .then((todos) => (this.todos = todos))
      .catch((err) => console.log(err));
  }

  toggleTodo(id: string): void {
    this._todoService.toggleTodo(id);
  }

  deleteTodo(id: string): void {
    this._todoService.deleteTodo(id);
  }

  setClasses(id: string): Object {
    return {
      'todo__whattodo--done': this.todos.find((todo) => todo.id == id).isDone,
    };
  }
}
