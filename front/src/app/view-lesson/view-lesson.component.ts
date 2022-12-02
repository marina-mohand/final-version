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
    console.log(id);
    this.lessonsService.getOneLesson(id).subscribe(
      (res)=>{
        this.lessonsService.lessons = res as TeacherLesson[];
      },
      (error)=>{
        console.log("Error")
      }
    )
  }
}

