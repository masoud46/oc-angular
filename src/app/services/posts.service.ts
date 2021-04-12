import { Injectable } from '@angular/core';
import {Post} from '../models/Post.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  postSubject = new Subject<Post[]>();
  private posts: Post[] = [
    new Post(
      'My first post',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec metus purus. Nullam interdum feugiat quam, at blandit orci bibendum vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur suscipit cursus. In magna odio, auctor sed magna sed, eleifend viverra nibh.'
    ),
    new Post(
      'My second post',
      'Curabitur vel enim eu justo congue volutpat eget hendrerit nibh. Vivamus sit amet nibh consequat, convallis nisi iaculis, hendrerit elit. Nulla commodo placerat turpis eget dignissim. Integer dolor ante, fermentum ut neque non, convallis sollicitudin est. Quisque eget dolor non neque consequat euismod eu ut ex.'
    ),
    new Post(
      'Another post',
      'Nullam ut nisl eu elit consectetur sollicitudin. Quisque porttitor porttitor ultrices. Suspendisse pharetra mi eget massa mattis mollis. Suspendisse potenti. Mauris eleifend egestas ipsum ut elementum. Nulla lorem justo, pulvinar ut auctor vel, iaculis eget dui. Quisque quis finibus odio. Cras posuere, elit fermentum rutrum sollicitudin, justo ipsum dapibus eros, et cursus metus lorem blandit lacus.'
    ),
  ];

  constructor() { }

  emitPosts(): void {
    this.postSubject.next(this.posts.slice());
  }

  addPost(post: Post): void {
    this.posts.push(post);
    this.emitPosts();
  }

  deletePost(i: number): void {
    this.posts.splice(i, 1);
    this.emitPosts();
  }

  loveIt(i: number, n: number): void {
    this.posts[i].loveIts += n;
    this.emitPosts();
  }

}
