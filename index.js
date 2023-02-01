const fs = require('fs');
const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
app.use(cors());
app.get('/', (req, res) => {
  res.end('Hello World!');
});
app.get('/name', (req, res) => {
    res.end('Hello Kiran!');
  });
  app.get("/nicole", (req, res) => {
    fs.readFile(__dirname + '/' + 'nicolelepra.json', (err, data) => {
        res.end(data);
    });
    app.get("/robin", (req, res) => {
      fs.readFile(__dirname + '/' + 'RobinSharma.json', (err, data) => {
          res.end(data);
      });
      app.get("/james", (req, res) => {
        fs.readFile(__dirname + '/' + 'JamesClear.json', (err, data) => {
            res.end(data);
        });
  });
  app.get("/hector", (req, res) => {
    fs.readFile(__dirname + '/' + 'ikigai.json', (err, data) => {
        res.end(data);
    });
});
app.get("/anupa", (req, res) => {
  fs.readFile(__dirname + '/' + 'anupa.json', (err, data) => {
      res.end(data);
  });
});
});
});
app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });