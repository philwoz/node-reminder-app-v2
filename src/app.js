console.log(process.argv)

const { addNote, listNotes, removeNote} = require("../utils/notes")
const yargs = require("yargs")
console.log(yargs.argv)
const command = process.argv[2]

if (command == "add") {
    console.log("adding a note....")
    addNote(yargs.argv.note)
} else if (command == "remove"){
    console.log("deleting note....")
    removeNote(yargs.argv.note)
} else if (command == "list"){
    listNotes()
} else {
    console.log("command not recognised")
}



