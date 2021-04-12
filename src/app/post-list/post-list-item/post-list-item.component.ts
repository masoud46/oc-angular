import {Component, Input} from '@angular/core';
import {Post} from '../../models/Post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent {

  abs = Math.abs ;

  @Input() post = new Post('', '');

  constructor() { }

}
