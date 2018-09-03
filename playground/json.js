// var obj = {
//     name: "Suraj"
// }

//     var StrObj = JSON.stringify(obj);

//     console.log(typeof StrObj);
//     console.log(StrObj);

// var personString = '{"name": "Suraj", "Age": 23}'
// console.log(typeof personString);
// var person = JSON.parse(personString);
// console.log(typeof person);

const fs = require("fs");

var originalNote = {
    title: 'Some Title',
    body: 'Some Body'
}; 
var originalNoteString = JSON.stringify(originalNote);
console.log(typeof originalNoteString);
fs.writeFileSync('notes.json',originalNoteString)

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);