const fs = require("fs")
const mongoose = require('mongoose')
const Task = require("../model/task")

require("../server")


// const loadNotes = async () => {
//     try{
//         const res = await Task.find().lean()
//         const notesJson = res.toString()
//         return JSON.parse(notesJson)
//     } catch (error) {
//         return []
//     }
// }

// const saveNotes = allNotes => {
//     const notesJson = JSON.stringify(allNotes)
//     fs.writeFileSync(mongoose.connect(process.env.DATABASE), notesJson)
// }

const addNote = async (myNote) => {
    const a = await Task.find({}).lean()
    // const allNotes = loadNotes()
    // allNotes.push({reminder: myNote})
    try{
    const task = new Task({name: myNote, id: a.length + 1})
    
    await task.save()
    } catch (err) {
        console.log(err)
    }
    // saveNotes(allNotes)
}

const listNotes = async () => {
    // const allNotes = loadNotes()
    const a = await Task.find({}).lean()
    // const notesJson = a.toString()
    console.log(a)
    // allNotes.map((note, index) => {
    //     console.log(`${index + 1}. ${note.reminder}`)
    // })
}

const removeNote = async (noteToDelete) => {
    const allNotes = listNotes()
    console.log(noteToDelete)
  
    try {
        
        const a = await Task.deleteOne({id: noteToDelete})
        // await task.save()
      
    //   console.log(allNotes[itemToDelete])
    //   console.log(noteToDelete.remove)
    //   const removedItem = allNotes.splice(itemToDelete, 1)
    //   console.log(removedItem)

      console.log(`Successfully removed item ${a}`)
    } catch (error) {
      console.log("Number out of range")
    }
  
    // saveNotes(allNotes)
  }


module.exports = {
    addNote,
    listNotes,
    removeNote,
}
