import { Component } from '@angular/core';
import { ServicePosts } from './app.servicePosts'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ServicePosts]
})
export class AppComponent {
  title: string;
  firma: string;
  listado: string[];
  showList: boolean;
  textShow: string;
  mensajes: string;
  listName: string;
  totalItems:number;

  constructor(private servicePosts: ServicePosts) {
    this.title = 'app';
    this.firma = 'fin del curso';
    this.listado = ['elemento 1', 'elemento 2', 'elemento 3', 'elemento 4'];
    this.showList = true;
    this.textShow = 'Mostrar';
    this.mensajes = '';
    this.listName = 'Listado original';
    this.totalItems=this.getTotal();
  }
  newElement(inputElement) {
    //    this.mensajes=inputElement.value;    
    this.listado.push(inputElement.value);
    this.totalItems=this.getTotal();
    inputElement.value = '';
  }

  changeShow() {
    if (this.showList) {
      this.showList = false;
      this.textShow = 'Mostrar';
    }
    else {
      this.showList = true;
      this.textShow = 'Ocultar';
    }
  }
  showListado() {
    return this.showList;
  }

  getTotal(){
    return this.listado.length;
  }

  getPosts() {
    this.mensajes = 'Cargando Posts...';
    this.servicePosts.getPosts().subscribe(posts => {
      this.mensajes = 'Total ' + posts.length + '. Elemento 0 > ' + posts[0].title;
    });
  }
}