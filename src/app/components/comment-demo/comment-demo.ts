import { Comment } from './../../models/comment';
import { CommentService } from './../../services/comment.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'smartAssist-comment-demo',
  imports: [],
  templateUrl: './comment-demo.html',
  styleUrl: './comment-demo.css'
})
export class CommentDemo {
  commentArr: any;

  commentService = inject(CommentService);

  ngOnInit() {
    this.commentService.getAllComments().subscribe((response: Comment[]) => {
      this.commentArr = response;
    })
  }
}
