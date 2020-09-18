import { Component, Input, OnInit } from '@angular/core';
import { ITodo } from '../interfaces/todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  @Input() todo: ITodo;

  constructor(private _todoService: TodoService) {}

  ngOnInit(): void {}

  toggleTodo(id: string): void {
    this._todoService.toggleTodo(id);
  }

  deleteTodo(id: string): void {
    this._todoService.deleteTodo(id);
  }

  setClasses(): Object {
    return {
      'todo__whattodo--done': this.todo.isDone,
    };
  }
}
