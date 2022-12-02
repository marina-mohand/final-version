import { Component, Output, OnInit, Input, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherLesson } from '../models/teacher-lesson';
import { LessonsService } from '../lessons.service';
import { FormControl, FormGroup,NgForm,ReactiveFormsModule } from '@angular/forms';
import { User } from '../models/User';
@Component({
  selector: 'app-home-student',
  templateUrl: './home-student.component.html',
  styleUrls: ['./home-student.component.scss']
})
export class HomeStudentComponent implements OnInit {

  user = new User;
  tab!:(string|null)[];
  constructor(private route:ActivatedRoute, private router:Router, public lessonsService:LessonsService) { }

  ngOnInit(): void {
    this.getLessons();
  }
  getLessons() {
    this.lessonsService.getLessonsStudent().subscribe(
      (res)=>{
        this.lessonsService.lessons = res as TeacherLesson[];
      },
      (error)=>{
        console.log("Error")
      }
    )
  }
  onDelete(id: string) {

  }


}
