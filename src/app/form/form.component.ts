import { Component, OnInit } from '@angular/core';
import {ServerService} from '../serveices/server.service';
import {CourseModel} from '../models/course.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private serverService: ServerService) { }
  courses: CourseModel[];
  ngOnInit() {
    this.serverService.getServers().subscribe(
        (courses: CourseModel[]) => this.courses = courses,
        (error) => console.log('Error occured')
      );
  }

}
