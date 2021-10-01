import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private courses = [
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
    },
    {
      id: 1,
      title: 'Angular 12 Fundamentals',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 23,
      title: 'React 18 Fundamentals',
      description: 'Learn the fundamentals of React 16',
      percentComplete: 78,
      favorite: false
    }
  ];

  constructor() {
    // TODO:
  }

  all() {
    return this.courses;
  }

  find(courseId) {
    console.log('Find course', courseId);
  }

  create(course) {
    console.log('Create course', course);
  }

  update(course) {
    console.log('Update course', course);
  }

  delete(courseId) {
    console.log('Delete course', courseId);
  }
}
