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
            console.log(`\n Note created \n --- \n ${note.title}\n ${note.body}`);           

    saveNotes(notes);
    return note; 
    } else {
        console.log(`\n Note Titled ${note.title} already exists.`);
    }
};

var listAll = (note) => {
    return fetchNotes();
}
var logNote = (note) => {
    console.log(`\n --- \n Title: ${note.title}\n Body: ${note.body}`)
} 


var readNote = (title) => {
    
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title === title);    
    return filteredNotes[0];
    
}

var removeNote = (title) => {
        var notes = fetchNotes();
        var filteredNotes = notes.filter((note) => note.title !== title)
        saveNotes(filteredNotes);
        return notes.length !== filteredNotes.length;
    };

module.exports = {
    addNote,
    listAll,
    readNote,
    removeNote,
    logNote
}