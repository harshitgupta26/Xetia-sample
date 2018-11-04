import { Component, OnInit } from '@angular/core';
import {Form, FormControl, FormGroup, Validators} from '@angular/forms';
import {ServerService} from '../serveices/server.service';
import {CourseModel} from '../models/course.model';
import {MatSnackBar} from '@angular/material';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-newcourse',
  templateUrl: './newcourse.component.html',
  styleUrls: ['./newcourse.component.css']
})
export class NewcourseComponent implements OnInit {
  constructor(private serverService: ServerService, private snackbar: MatSnackBar) { }
  options: string[] = ['Graduate', 'Post Graduate', 'Student', 'Anyone'];
  filteredOptions: Observable<string[]>;
  courses: CourseModel;
  courseForm: FormGroup;
  coursenameControl: FormControl;
  descriptionControl: FormControl;
  eligibilityControl: FormControl;
  durationControl: FormControl;
  courseselectControl: FormControl;
  addcourse() {
    const postname = this.coursenameControl.value;
    const description = this.descriptionControl.value;
    const elg = this.eligibilityControl.value;
    const dur = this.durationControl.value;
    this.courses = ({
      Sr_No: 615,
      Course: postname,
      Duration: dur,
      Eligibility: elg
    });
    this.serverService.storeServers(this.courses).subscribe(
      (response) => {console.log(response);
        const popup = this.snackbar.open('Success!! Your course featuring in Courses section', null, {
          duration: 4500,
          verticalPosition: 'top'
        });
        },
      (error) => console.log(error)
    );
  }
  ngOnInit() {
    this.coursenameControl = new FormControl(null, [Validators.required]);
    this.descriptionControl = new FormControl(null, [Validators.required]);
    this.durationControl = new FormControl(null, [Validators.required]);
    this.eligibilityControl = new FormControl(null, [Validators.required]);
    this.courseselectControl = new FormControl(null, [Validators.required]);
    this.courseForm = new FormGroup({
      coursename: this.coursenameControl,
      descr: this.descriptionControl,
      elg: this.eligibilityControl,
      dur: this.durationControl,
      courseselect: this.courseselectControl
    });
    // this.serverService.getOptions().subscribe(
    //   (options: string[]) => this.options = options
    // );
    this.filteredOptions = this.courseselectControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
