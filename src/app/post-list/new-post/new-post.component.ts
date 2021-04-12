import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Post} from '../../models/Post.model';
import {PostsService} from '../../services/posts.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  postForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private postsService: PostsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required ],
      content: ['', Validators.required ],
    });
  }

  onSubmit(): void {
    const formValue = this.postForm.value;
    const post = new Post(
      formValue.title,
      formValue.content,
    );
    this.postsService.addPost(post);
    this.router.navigate(['/posts']);
  }

}
