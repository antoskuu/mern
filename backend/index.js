require('dotenv').config({path: '../.env'});
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Utilisez express.json() pour parser les corps des requêtes JSON
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    password: String
});

const User = mongoose.model('User', userSchema);

// Route GET pour tester
app.get('/', (req, res) => {
    User.find({})
        .then(found => res.send(found))
        .catch(err => {
            console.log("Error occurred, " + err);
            res.send("Some error occurred!");
        });
});

// Route POST pour ajouter un utilisateur
app.post('/', (req, res) => {
    const newUser = new User(req.body);
    newUser.save()
        .then(() => res.status(201).send("User added successfully"))
        .catch(err => res.status(400).send(err));
});

app.listen(3333, () => {
  console.log('Server is running on port 3333');
});