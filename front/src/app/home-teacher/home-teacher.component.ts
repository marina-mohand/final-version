import { Component, Output, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherLesson } from '../models/teacher-lesson';
import { LessonsService } from '../lessons.service';
import { FormControl, FormGroup,NgForm,ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../models/User';
import { HttpClient } from '@angular/common/http';


declare var M: any;
const presetFiles = [new File([], "file 1"), new File([], "file 2")];
const presetFile = new File([], "file 1");

@Component({
  selector: 'app-home-lesson-teacher',
  templateUrl: './home-teacher.component.html',
  styleUrls: ['./home-teacher.component.scss'],
  providers:[LessonsService],
})

export class HomeTeacherComponent implements OnInit {
  @ViewChild('fileInput',{static:false}) fileInput!:ElementRef;

  display: FormControl = new FormControl("", Validators.required);
  file_store!: FileList ;
  file_list: Array<string> = [];

  id:any;
  lesson!:TeacherLesson;
  lessonTitle="";
  lessonDescription="";
  idProf!:string; 
  lessonContenu!:string;
  lessonImage!:string;
  form!: FormGroup;
 
 
  

  //Tableau de leçons
  lessons : any;
  //fileInput!: ElementRef;



  //On va récupérer le modèle de données de Service
  constructor( private route:ActivatedRoute, private router:Router, public lessonsService:LessonsService,private http : HttpClient) {

 
  
  }

 
  ngOnInit(): void {
    this.getLessons();

    }

    onFileSelect(event: Event) {
      const file = (event.target as HTMLInputElement).files![0];
      this.form.patchValue({ image: file });
      const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
      if (file && allowedMimeTypes.includes(file.type)) {
        const reader = new FileReader();
        reader.onload = () => {
          this.lessonImage = reader.result as string;
        };
        reader.readAsDataURL(file);
      }
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
    console.log(lesson.lessonTitle)
    this.lessonsService.saveLesson(lesson, idprof);
    window.location.reload();
  }
  getidprof(){
    return sessionStorage.getItem('_id') as string;
  }

  onFileUpload(){
    const imageBlob = this.fileInput.nativeElement.files[0];
    const file = new FormData();
    file.set('file',imageBlob);
    this.http.post('http://localhost:3000/',file).subscribe(response=>{
      console.log(response);
    })


  }
   



  user!:User;
  nom=this.user.nom;
  fileToUpload: any;
  imageUrl: any;
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    //Show image preview
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  
 

 



    

     

}
