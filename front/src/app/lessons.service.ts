import { ElementRef, Injectable, ViewChild } from '@angular/core';
import { TeacherLesson } from './models/teacher-lesson';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LessonsService {
  

  @ViewChild('fileInput',{static:false}) fileInput! : ElementRef;

  //Créer le tableau "lessons" en local
  lessons!: TeacherLesson[];
  selectedLesson!: TeacherLesson;

  //permettre l echange entre le client et le server via REQ HTTP
  constructor(public http:HttpClient, private router:Router){}

 /* onFileUpload(){
    const imageBlob = this.fileInput.nativeElement.files[0];
    const file= new FormData();
    file.set('file',imageBlob);
    return this.http.post("http://localhost:3000/lessons",file).subscribe(response=>{
      console.log(response);
    });
  }*/

  //TEACHER

  getLessons(){
    return this.http.get("http://localhost:3000/homeTeacher/"+sessionStorage.getItem('_id'));
  }
  getLessonsStudent(){
    return this.http.get("http://localhost:3000/homeTeacher/");
  }

    //Etape 2 : on recoit la lesson et on l envoie au server 
    addLesson(lesson: any):any{
       //On appel la methode addNote() du notes.component qui appelera l APi de notes
        //et on place l object a envoyer
        //Etape 3 : return Observable car on est en mode asynchrone et que l Observable permet d etre notifié en cas de réponse
        return this.http.post("http://localhost:3000/homeTeacher",lesson);
      }
    

      //Observable<any>
    deleteLesson(lessonId:String){
      return this.http.delete("http://localhost:3000/homeTeacher/"+lessonId ); 
    }

    
  saveLesson(lesson:TeacherLesson, idprof:string){
    lesson.idProf = idprof;
    this.http.post('http://localhost:3000/homeTeacher', lesson).subscribe(res =>{
      console.log(res);
    })
  }

  updateLesson(lesson: TeacherLesson, id:string) {
    lesson._id=id;
    return this.http.put('http://localhost:3000/edit-lesson/'+id, lesson).subscribe(res =>{
      console.log(res);
    });
  }

  getOneLesson(id:String){
    return this.http.get('http://localhost:3000/viewLesson/'+id);
  }


  
  

  //Envoi de l image au Node Server
  //++ : remplace <any> par <Response>
  /*uploadImage(image: File){
    const formData = new FormData();

    formData.append('image', image);

    return this.http.post('http://localhost:3000/homeLessonsTeacher/', formData);
  }*/



}
