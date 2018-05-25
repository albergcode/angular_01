import { Component, OnInit } from '@angular/core';
import { ServicePosts, ServicePostsMock, iServicePosts } from '../app.servicePosts'
import { servicePostProvider } from './posts.servicePost.provider';

@Component({
  selector: 'post-root',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],   
  providers:[servicePostProvider] // provider
  //providers: [ServicePostsMock] // >> ok
  //providers: [{ provide: ServicePosts, useClass: ServicePostsMock }] //>> ok
})
export class PostsComponent implements OnInit {
  title: string;
  result: string;

  //constructor(private servicePosts: iServicePosts) {  >> no funciona interface, es clase base
  constructor(private servicePosts: ServicePosts) {
    console.log('PostsComponent > constructor');
    this.title = 'Consulta Post';
    this.result = '';
  }
  getPost(txtPostId) {
    console.log('PostsComponent > getPost');
    let id = txtPostId.value;
    if (id != '' && parseInt(id) > 0 && parseInt(id) < 100) {
      this.servicePosts.getPost(id).subscribe(post => {
        console.log('PostsComponent > getPost > result');
        this.result = post.id + ' > ' + post.title;
      });
    }
    else {
      this.result = 'ID no válido';
    }
  }

  ngOnInit() {
    console.log('PostsComponent > ngOnInit');
  }

}
