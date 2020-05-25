import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts().subscribe((data) => {
      this.posts = JSON.parse(JSON.stringify(data));
    });
  }

  fetchPosts() {
    return this.http.get('assets/mocks/mocks.json');
  }
}

interface Post {
  img: string;
  desc: string;
}
