import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITodo } from './interfaces/todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private _baseURL: string = 'https://spring-todo-api.herokuapp.com/api/v1';
  private _todos: ITodo[] = [];

  constructor(private _http: HttpClient) {}

  private _fetchTodos(): Promise<ITodo[]> {
    return this._http.get<ITodo[]>(this._baseURL + '/todos').toPromise();
  }

  async todos(): Promise<ITodo[]> {
    if (this._todos.length == 0) this._todos = await this._fetchTodos();
    return this._todos;
  }

  addTodo(whatToDo: string): void {
    this._http
      .post<ITodo>(this._baseURL + '/addTodo', {
        whatToDo,
        isDone: false,
      })
      .subscribe((data) => {
        this._todos.unshift(data);
      });
  }

  toggleTodo(id: string): void {
    this._http
      .post<ITodo>(this._baseURL + '/toggleTodo', {
        id,
      })
      .subscribe((data) => {
        this._todos.find((td) => td.id == data.id).isDone = data.isDone;
      });
  }

  deleteTodo(id: string) {
    this._http
      .post(this._baseURL + '/deleteTodo', { id })
      .subscribe((deleted) => {
        if (deleted) {
          this._todos.splice(
            this._todos.indexOf(this._todos.find((td) => td.id == id)),
            1
          );
        }
      });
  }
}
