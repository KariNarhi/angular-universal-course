import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { Observable } from 'rxjs';
import { CoursesService } from '../services/courses.service';
import { map, tap } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  courses$: Observable<Course[]>;

  constructor(
    private coursesService: CoursesService,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Angular University - All Courses');

    this.courses$ = this.coursesService
      .findAllCourses()
      .pipe(map(Object.values));
  }
}
