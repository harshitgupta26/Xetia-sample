import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CourseModel} from '../models/course.model';
import {catchError, map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable()
export class ServerService {
  constructor(private http: HttpClient) {
  }
  options: string[];
  storeServers(courses: CourseModel) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post('https://first-project-79748.firebaseio.com/courses.json',
      courses,
      {headers: headers});
  }
  getServers() {
    // return this.http.get('../assets/course.json');
    return this.http.get('https://first-project-79748.firebaseio.com/courses.json')
      .pipe(map(
        (courses: CourseModel[]) => {
          return Object.values(courses);
        }
      ),
        catchError(
          (error) => {
            return Observable.throw(error);
          }
        ));
   }
  //  getOptions() {
  //    return this.http.get('https://first-project-79748.firebaseio.com/courses.json')
  //      .pipe(map(
  //        (courses: CourseModel[]) => {
  //          for (const course of courses) {
  //             this.options.push(course.Course);
  //          }
  //          return this.options;
  //        }
  //        ),
  //        catchError(
  //          (error) => {
  //            return Observable.throw(error);
  //          }
  //        ));
  // }
}
