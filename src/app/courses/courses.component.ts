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
    this.loadCourses();
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
      this.coursesService.update(course)
        .subscribe(result => this.refreshCourses());
    } else {
      this.coursesService.create(course)
        .subscribe(result => this.refreshCourses());
    }
  }

  deleteCourse(courseId): void {
    this.coursesService.delete(courseId)
      .subscribe(result => this.refreshCourses());
  }

  loadCourses() {
    this.coursesService.all()
      .subscribe(courses => this.courses = courses);
  }

  refreshCourses() {
    this.resetSelectCourse();
    this.loadCourses();
  }
}
