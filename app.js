console.log("Strating app.js");

const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes");

const argv = yargs.argv;
var command = argv._[0];

console.log("command: ", command); 
console.log("Yargs: ", argv);

if(command === 'add'){
   notes.addNote(argv.title, argv.body);


} else if(command === 'list'){
    notes.listNote();

} else if(command === 'read') {
    notes.readNote(argv.title);

} else if(command === 'remove'){
    var noteRemoved = removeNote(argv.title);
    

} else {
    console.log("command not recognised");
}