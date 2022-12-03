import { User } from "./User";

export class TeacherLesson {
    //Champs associés à une leçon
     // id ? : champ optionnel 
     _id!: string;
     lessonTitle! : string;
     lessonDescription! : string;
     idProf!:string|null;
     lessonContenu! : string;
     lessonImage!:string;
   
     /*
     color: any;
     lessonNbLikes: any;
     selectedLevel!: string;
     imageService: any;
     imagePath!: string;*/



}
