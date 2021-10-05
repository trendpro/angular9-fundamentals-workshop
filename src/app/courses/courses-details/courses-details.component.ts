import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.scss']
})
export class CoursesDetailsComponent {
  selectedCourse;
  originalTitle;

  @Output() save = new EventEmitter();
  @Output() cancel = new EventEmitter();

  @Input() set course(value) {
    if (value) {
      this.selectedCourse = Object.assign({}, value);
      this.originalTitle = value.title;
    }
  }
}
