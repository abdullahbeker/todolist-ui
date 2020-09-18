import { Component, OnInit } from '@angular/core';
import { strict } from 'assert';
import { ITodo } from '../interfaces/todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  constructor(private _todoService: TodoService) {}

  ngOnInit(): void {}

  addTodoIfEnterPressed(e: KeyboardEvent): void {
    if (e.key === 'Enter') {
      let el = <HTMLInputElement>e.target;
      if (!el.value) return;
      this._todoService.addTodo(el.value.trim());
      el.value = '';
    }
  }
}
