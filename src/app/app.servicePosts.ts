import { Injectable } from '@angular/core';
//import { HttpModule } from '@angular/http'; //deprecated
import { HttpClient } from '@angular/common/http'; //nuevo 
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx'
//import { HttpClient } from 'selenium-webdriver/http';

export class EntityPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface iServicePosts {
    getPosts(): Observable<EntityPost[]>;
    getPost(id: number): Observable<EntityPost>;
}

@Injectable()
export class ServicePosts implements iServicePosts {
    constructor(private http: HttpClient) {
        console.log('Service - consturctor https://jsonplaceholder.typicode.com/posts');
    }
    getPosts() {
        // return this.http.get('https://jsonplaceholder.typicode.com/posts').map(r=>r.json());
        return this.http.get<EntityPost[]>('https://jsonplaceholder.typicode.com/posts');
    }
    getPost(id: number) {
        return this.http.get<EntityPost>('https://jsonplaceholder.typicode.com/posts/' + id);
    }
}

@Injectable()
export class ServicePostsMock implements iServicePosts {
    constructor() {
        console.log('ServicePostsMock - consturctor');
    }
    getPosts() {       
        let items=this.mockGetItems(); 
        return  Observable.of(items);
    }
    getPost(id: number) {
        let items=this.mockGetItems(); 
        return Observable.of(items[0]);
    }

    private mockGetItems(): EntityPost[] {
        let items: EntityPost[] = new Array();
        for (let i = 1; i <= 10; i++) {
            let auxItem = new EntityPost();
            auxItem.id = i;
            auxItem.userId = 33;
            auxItem.title = "Elemento " + i;
            auxItem.body = "cuerpo del elemento " + i;
            items.push(auxItem);
        }
        return items;
        //return new Promise<item[]>((resolve) => resolve(items));
    }
}