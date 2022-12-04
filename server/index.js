const express = require('express');
const app=express();

var cors = require('cors');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Lesson = require('./models/Lesson');
const User = require('./models/User');
const {response, request} = require('express');
const multer = require('multer');
const storage = multer.diskStorage({
    destination:'./',
    filename:function(req,file,cb){
        cb(null,Date.now()+'.'+file.mimetype.split('/')[1])
    }
})
const upload = multer({storage : storage})

var db = mongoose.connect('mongodb+srv://speakAppAdmin:speakAppAdmin@cluster0.zx6ndjv.mongodb.net/test').then(()=>{
    console.log('Successfully connected to DB !');
})
.catch((error) => {
    console.log('Unable to connect to DB!');
    console.error(error);
});

//Juste pour les tests en local
app.use(cors({credentials:true, origin:'http://localhost:4200',}));


app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
//Marche que pour les pblm des tests en local
//app.use(session({secret:"mySecretKey",cookie:{maxAge:24*60*60*1000}}));

//Creation de notre tableaux de lessons
let lessons =[];
let user =[];

app.post('/',upload.single('file'),(req,res)=>{})

//Ici on a les entrées des API qui nous retourne un json retournant le nom de l entrée
//GET /lessons
app.get('/homeTeacher',(request,response)=>{

    Lesson.find({},(err,lessons)=>{
        response.json(lessons)
    })
});
app.get('/homeTeacher/:id',(request,response)=>{
    const id = request.params.id;

    Lesson.find({ idProf : id}, function (err, lessons) {
        response.json(lessons)
    });
    
});
app.post('/login', (req, res) => {
    mongoose.connect('mongodb+srv://speakAppAdmin:speakAppAdmin@cluster0.zx6ndjv.mongodb.net/test',{ useMongoClient: true }, function(err){
        if(err) throw err;
        User.find({
            mail : req.body.mail, password : req.body.password
        }, function(err, user){
            if(err) throw err;
            if(user.length === 1){  
                return res.status(200).send({user})
            } else {
                return res.status(200).null;
            }
             
        })
    });
})
//POST /signin
app.post('/signin',(request,response)=>{
    var prenom = request.body.prenom;
    var nom = request.body.nom;
    var mail = request.body.mail;
    var password = request.body.password;
    var choice = request.body.choice;

    var user = new User();
    user.nom = nom;
    user.prenom = prenom;
    user.mail = mail;
    user.password = password;
    user.choice = choice;

    user.save((err,result) => {
        if(err){
            console.log("there is an error in adding user in database");
        }
    })
});



app.delete('/homeTeacher/:id',(req,res) => {
    const id = req.params.id;
    
    Lesson.findByIdAndRemove(id, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Tutorial with id=${id}. Maybe Lesson was not found!`
          });
        } else {
          res.send({
            message: "Tutorial was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial with id=" + id
        });
      });
  });


  
//GET /lessons/:id --> via URL
app.get('/lessons/id',(request,response)=>{
    console.log(request.params.id)
    TeacherLesson.findOne({_id : request.params.id},(error,lesson)=>{
        if (error){
            //error 404 : page web non trouvée
            return response.status(404).json({error:error});
        }
            //REQ HTTP qui indique la réussite d une requête
            response.status(200).json(lesson);
        
    });
});

app.get('/viewLesson/:id',(request,response)=>{
    const id = request.params.id;

    Lesson.find({ _id : id}, function (err, lessons) {
        response.json(lessons)
    });
})

//POST /lessons
app.post('/homeTeacher',(request,response)=>{
   
    var lessonTitle = request.body.lessonTitle;
    var lessonDescription = request.body.lessonDescription;
    var idProf = request.body.idProf;
    var lessonContenu = request.body.lessonContenu;

    var lesson = new Lesson();
    lesson.lessonTitle = lessonTitle;
    lesson.lessonDescription = lessonDescription;
    lesson.idProf = idProf;
    lesson.lessonContenu = lessonContenu;

    console.log(lesson);

    lesson.save((err,result) => {
        if(err){
            console.log("there is an error in adding lesson in database", err);
            response.send({success: "Failed to add Lesson", status:500});
        }
    })
});





//POST /lessons/:id --> via REQ HTTP non visible par le user 
app.get('/homeTeacher/:id',(request,response)=>{
    Lesson.findById(request.params._id,(error,data)=>{
        if(error){
            return next(error)
        } else {
            response.json(data)
        }
    })
});

//PUT /lessons/:id
//PUT = RECUPERER
app.put('/edit-lesson/:id',(request,response)=>{
    //request = ce que j ai reçu
    let requestLesson = request.body;

    let newLesson= ({
        _id: request.params.id,
        lessonTitle : requestLesson.lessonTitle,
        lessonDescription : requestLesson.lessonDescription,
        lessonContenu : requestLesson.lessonContenu
       
    });
    console.log(newLesson);


Lesson.updateOne({_id:request.params.id},newLesson,(error,lesson)=>{
    if(error) return response.status(400).json({error:error});
    response.status(201).json(lesson);
});

})


app.put('/profil/:id',(request,response)=>{
    //request = ce que j ai reçu
    let requestUser = request.body;

    let newUser= ({
        _id: request.params.id,
        mail : requestUser.mail,
        paswword : requestUser.password,
        nom : requestUser.nom,
        prenom : requestUser.prenom,
        choice : requestUser.choice

       
    });
    console.log(newUser);


User.updateOne({_id:request.params.id},newUser,(error,user)=>{
    if(error) return response.status(400).json({error:error});
    response.status(201).json(user);
});

})

app.put('/homeStudent',(request,response)=>{
    //request = ce que j ai reçu



Lesson.updateOne({_id:request.params.tab[0]},{students: students + request.params.tab[1]},(error,lesson)=>{
    if(error) return response.status(400).json({error:error});
    response.status(201).json(lesson);
});

})


app.delete('/homeLessonTeacher/id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Employee.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});



//Port d écoute du server
app.listen(3000, ()=>{console.log("Listenning on port 3000")});