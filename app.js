const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes");

const argv = yargs.argv;
var command = argv._[0];

if(command === 'add'){
   notes.addNote(argv.title, argv.body);


} else if(command === 'list'){
    var allNotes = notes.listAll();
    console.log(`Printing ${allNotes.length} note(s).`)
    allNotes.forEach((note) => notes.logNote(note));
} else if(command === 'read') {
   var note = notes.readNote(argv.title);
    if(note) {
        console.log('Note found');
        notes.logAll(note);    
    } else {
        console.log("Note not found");
    }

} else if(command === 'remove'){
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note already exist';
    console.log(message);  
    

} else {
    console.log("command not recognised");
}