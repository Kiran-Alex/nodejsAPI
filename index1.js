const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
app.use(cors());

mongoose.connect('mongodb+srv://kiran:kiran@sandbox.xrkngie.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const UserSchema = new mongoose.Schema({
  aname: String,
  bname: String,
  imageurl : String
});

const User = mongoose.model('User', UserSchema);

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/books', (req, res) => {
  User.find({}, (err, users) => {
    if (err) return res.status(400).send(err);
    res.send(users);
  });
});
app.get('/books/:aname', (req,res) => {
    try{
        User.findOne({aname: req.params.aname}, (err, alien) => {
            if(err)
                res.send('Error ' + err)
            else
                res.json(alien)
        })
    }catch(err){
        res.send('Error ' + err)
    }
})


  
app.post('/books', (req, res) => {
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) return res.status(400).send(err);
    res.send(user);
  });
});

app.listen(4000, () => {
  console.log('Server started on http://localhost:4000');
});
