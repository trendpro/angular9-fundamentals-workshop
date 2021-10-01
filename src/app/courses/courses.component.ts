import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../shared/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses = null;
  currentCourse = null;

  constructor(private coursesService: CoursesService) {
    // TODO:
  }

  ngOnInit(): void {
    this.resetSelectCourse();
    this.courses = this.coursesService.all();
  }

  cancel(): void {
    this.resetSelectCourse();
  }

  resetSelectCourse(): void {
    this.currentCourse = {
      title: '',
      description: '',
      percentComplete: 0,
      favorite: false
    };
  }

  selectCourse(course): void {
    this.currentCourse = course;
    console.log('course: ', course);
  }

  saveCourse(course): void {
    if (course.id) {
      this.coursesService.update(course);
    } else {
      this.coursesService.create(course);
    }
  }

  deleteCourse(courseId): void {
    this.coursesService.delete(courseId);
  }
}
