import { Component, Input, OnInit } from '@angular/core';
import { ITodo } from '../interfaces/todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  public todos: ITodo[];

  constructor(private _todoService: TodoService) {}

  ngOnInit(): void {
    this._todoService.todos().then((tds) => (this.todos = tds));
  }
}
