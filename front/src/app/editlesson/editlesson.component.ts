import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { TeacherLesson } from '../models/teacher-lesson';
import { LessonsService } from '../lessons.service';

@Component({
  selector: 'app-editlesson',
  templateUrl: './editlesson.component.html',
  styleUrls: ['./editlesson.component.scss']
})
export class EditlessonComponent implements OnInit {


  id:any;
  lesson!:TeacherLesson;
  lessonTitle="";
  lessonDescription="";
  lessonContenu="";

  //Tableau de leçons
  addLesson: any;
  
  constructor(private route:ActivatedRoute, private router:Router, public lessonsService:LessonsService, private url:ActivatedRoute) {
    
   }

  ngOnInit(): void {
    this.id = this.url.snapshot.params['id']
    console.log(this.id)
  }

  onSubmit(lesson:TeacherLesson) {
    this.lessonsService.updateLesson(lesson, this.id);
    this.router.navigate(['/homeTeacher'])
  }

}
