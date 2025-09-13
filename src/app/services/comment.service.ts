import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  httpCLient = inject(HttpClient); // Dependency Injection

  getAllComments(): Observable<Comment[]> {
    return this.httpCLient.get<Comment[]>('https://jsonplaceholder.typicode.com/comments');
  }
}
