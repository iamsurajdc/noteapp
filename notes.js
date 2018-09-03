
console.log("Starting notes.js");

const fs = require("fs");

var fetchNotes = () => {
    try{
        var noteString = fs.readFileSync('notes-data.json');
        return JSON.parse(noteString);
    } catch (e) {
        return [];
    }

};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title, body) => 
{
    var notes = fetchNotes();
    var note = {
        title,
        body
            }

    var duplicateNotes = notes.filter((note) => note.title === title)
    if(duplicateNotes.length === 0) {
        notes.push(note);
            console.log(`\n Note created \n --- \n ${note.title},\n ${note.body}`);           

    saveNotes(notes);
    return note; 
    } else {
        console.log(`\n Note Titled ${note.title} already exists.`);
    }
};

var listNote = () => {
    console.log("Listing All");
};

var readNote = (title) => {
    console.log("Reading Note", title);
}

var removeNote = (title) => {
    console.log("Removing Note", title)
};

module.exports = {
    addNote,
    listNote,
    readNote,
    removeNote
}