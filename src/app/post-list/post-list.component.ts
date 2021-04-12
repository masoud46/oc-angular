import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {PostsService} from '../services/posts.service';
import {Post} from '../models/Post.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts!: Post[];
  postSubscription!: Subscription;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postSubscription = this.postsService.postSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postsService.emitPosts();
  }

  ngOnDestroy(): void {
    this.postSubscription.unsubscribe();
  }

  onLoveIt(i: number, n: number): void {
    this.postsService.loveIt(i, n);
  }

  onDeletePost(i: number): void {
    this.postsService.deletePost(i);
  }

}
