import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 23,
      title: 'React 16 Fundamentals',
      description: 'Learn the fundamentals of React 16',
      percentComplete: 78,
      favorite: false
    }
  ];

  currentCourse = null;

  constructor() {
    // TODO:
  }

  ngOnInit(): void {
    this.resetSelectCourse();
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

  saveCourse(): void {
    console.log("form submitted:");
  }

  deleteCourse(courseId): void {
    console.log('courseId: ', courseId);
  }

}
