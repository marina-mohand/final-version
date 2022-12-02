import { Component, Output, OnInit, Input, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherLesson } from '../models/teacher-lesson';
import { LessonsService } from '../lessons.service';
import { FormControl, FormGroup,NgForm,ReactiveFormsModule } from '@angular/forms';
import { User } from '../models/User';

declare var M: any;


@Component({
  selector: 'app-home-lesson-teacher',
  templateUrl: './home-teacher.component.html',
  styleUrls: ['./home-teacher.component.scss'],
  providers:[LessonsService],
})

export class HomeTeacherComponent implements OnInit {
  
  id:any;
  lesson!:TeacherLesson;
  lessonTitle="";
  lessonDescription="";
  idProf!:string; 
  

  //Tableau de leçons
  lessons : any;
  fileInput!: ElementRef;


  //On va récupérer le modèle de données de Service
  constructor( private route:ActivatedRoute, private router:Router, public lessonsService:LessonsService) {}

 
  ngOnInit(): void {
    this.getLessons();
    }

    
  
  onDelete(_id: string) { 
    if (confirm('Are you sure to delete this record ?') == true) {
      this.lessonsService.deleteLesson(_id).subscribe((res) => {
        console.log('Deleted successfully');
        window. location. reload();
      });
    }
  }
  getLessons() {
    this.lessonsService.getLessons().subscribe(
      (res)=>{
        this.lessonsService.lessons = res as TeacherLesson[];
      },
      (error)=>{
        console.log("Error")
      }
    )
  }
  saveLesson(lesson:TeacherLesson, idprof:string){
    this.lessonsService.saveLesson(lesson, idprof);
    window.location.reload();
  }
  getidprof(){
    return sessionStorage.getItem('_id') as string;
  }

   

  
 

   
    

     

}
