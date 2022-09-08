import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Post } from './post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  readonly ROOT_URL = 'http://jsonplaceholder.typicode.com';
  
  posts!: Observable<Post[]>;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getPost() {
    this.posts = this.http.get<Post[]>(this.ROOT_URL + '/posts');
  }
}
