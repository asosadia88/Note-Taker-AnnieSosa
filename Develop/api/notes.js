const notes = require('express').Router();
const fs = require('fs');
const uuid = require('uuid');
const filename = './db/db.json';


notes.get('/', (req, res) => {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      console.error('File could not be opened. Error.');
      throw err;
    } else {
      res.json(JSON.parse(data));
    }
  });

});

notes.post('/', (req, res) => {
  if (req.body != null) {
    // Read in data, append new record, save back data.
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) {
        console.error('File could not be opened. Error.');
        throw err;
      } else {
        const tempNotes = JSON.parse(data);
        tempNotes.push({
          title: req.body.title,
          text: req.body.text,
          id: uuid.v4(),
        });
        fs.writeFile(filename, JSON.stringify(tempNotes), (err, data) => {
          if(err){
            console.log('File could not be written into. Error.');
            throw err;
          } else {
            res.json(tempNotes);
            console.log('Record was successfully inserted into file. Response successfully sent');
          }
        });
      }
    });
  } else {
    console.log('Note could not be added. Error: body is empty');
    throw err;
  }
});

module.exports = notes;
