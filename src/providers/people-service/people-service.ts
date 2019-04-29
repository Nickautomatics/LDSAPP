
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// Typescript custom enum for search types (optional)
export enum SearchType {
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}

export class Teacher {
    username: string;
    password: string;
}

@Injectable({
  providedIn: 'root'
})
export class PeopleServiceProvider {
  url = 'http://localhost:50204/api/';
  constructor(private http: HttpClient) { }

  authenticate(data) {
    return this.http.post(this.url + 'AuthenticateTeacher', data).pipe(map(results => results['test']));
  }

}
