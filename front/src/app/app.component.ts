import { HttpClient } from '@angular/common/http';
import { Component,ElementRef,ViewChild } from '@angular/core';
import { response } from 'express';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'speakapp';

  @ViewChild('fileInput',{static:false}) fileInput!:ElementRef;

  constructor(private http : HttpClient){}

  onFileUpload(){
    const imageBlob = this.fileInput.nativeElement.files[0];
    const file = new FormData();
    file.set('file',imageBlob);
    this.http.post('http://localhost:3000/',file).subscribe(response=>{
      console.log(response);
    })
  }
}
