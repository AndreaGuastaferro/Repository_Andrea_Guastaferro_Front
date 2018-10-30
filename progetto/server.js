const express = require('express');
const app = express();

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync') //sincronizzo un file json a a FileSync

const adapter = new FileSync('./ajaxFile.json') //associo le info contenute nel mio json ad un database;
const db = low(adapter);                            //adatto ciò che ho nel mio json al db
const bodyParser = require('body-parser');

app.use(express.static('dist'));

app.use(bodyParser.json()); // il body della mia richiesta POST viene trasformato om json

app.post('/articolo', function (req, res) {
  const idB = req.body.id;
  var like = (req.body.like === 'true');
  //console.log('log in arrivo dal client:' +like);
  //console.log('valore da inserire nel db:' + !like);
  db.get('articoli')
    .find({ id: Number(idB)})
    .assign({like: !like })
    .write();
  res.send('ok');
});


//var data= require ('./ajaxFile.json');

app.get('/articoli', function (req, res) {
  res.setHeader('Content-Type','application/json');
  res.send(db);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
