
require('dotenv').config({path: 'backend/.env'}); // Importez dotenv au début du fichier

const express = require ('express');
const app = express();
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});



const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGODB_URI, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);



const studentSchema = new mongoose.Schema({
    roll_no: Number,
    name: String,
    year: Number,
    subjects: [String]
});


const Student = mongoose.model('Student', studentSchema);


const stud = new Student({
    roll_no: 1001,
    name: 'Madison Hyde',
    year: 3,
    subjects: ['DBMS', 'OS', 'Graph Theory', 'Internet Programming']
});
stud
    .save()
    .then(
        () => console.log("One entry added"), 
        (err) => console.log(err)
    );


app.get('/', (req, res) => {
    Student.find({})
        .then(found => {
            res.send(found);
        })
        .catch(err => {
            console.log("Error occurred, " + err);
            res.send("Some error occurred!");
        });
});