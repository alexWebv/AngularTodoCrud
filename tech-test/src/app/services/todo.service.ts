import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from "../models/todo";

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private httpClient: HttpClient) {}

  get(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>('http://localhost:3000/tasks');
  }

  create(payload: Todo) {
    return this.httpClient.post<Todo>(
      'http://localhost:3000/tasks',
      payload
    );
  }

  getById(id: number): Observable<Todo> {
    return this.httpClient.get<Todo>(`http://localhost:3000/tasks/${id}`);
  }

  update(payload: Todo): Observable<Todo> {
    return this.httpClient.put<Todo>(
      `http://localhost:3000/tasks/${payload.id}`,
      payload
    );
  }

  delete(id: number) {
    return this.httpClient.delete(`http://localhost:3000/tasks/${id}`);
  }
}
