import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonsService } from '../lessons.service';
import { TeacherLesson } from '../models/teacher-lesson';

@Component({
  selector: 'app-view-lesson',
  templateUrl: './view-lesson.component.html',
  styleUrls: ['./view-lesson.component.scss']
})
export class ViewLessonComponent implements OnInit {

  lesson!:TeacherLesson;
  id!:any;

  constructor( private url:ActivatedRoute, public lessonsService:LessonsService ) { }

  ngOnInit(): void {
    this.id = this.url.snapshot.params['id'];
    this.getOneLesson(this.id);
  } 


  getOneLesson(id: any) {
    this.lessonsService.getOneLesson( this.id);
  }
}

