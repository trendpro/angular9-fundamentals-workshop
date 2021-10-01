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
      favorite: true
    }
  ];

  currentCourse = null;

  constructor() {
    // TODO:
  }

  ngOnInit(): void {
    // TODO:
  }

  selectCourse(course) {
    this.currentCourse = course;
    console.log('course: ', course);
  }

  deleteCourse(courseId) {
    console.log('courseId: ', courseId);
  }
}
