import { useState } from "react"
import {nanoid} from "nanoid"
import "./App.css" 
import NoteList from "./Components/Notelist"
import Search from "./Components/Search"
import Header from "./Components/Header"
const App = () => {
    const [notes , setNotes ] = useState([
      {
        id:nanoid(),
        text : "first notes",
        date : "11/12/2021"
      },
      {
        id:nanoid(),
        text : "second notes",
        date : "12/12/2021"
      },
      {
        id:nanoid(),
        text : "third notes",
        date : "13/12/2021"
      },
      {
        id:nanoid(),
        text : "fourth notes",
        date : "14/12/2021"
      }
    ])

    const [searchText , setSearchText] = useState("")
    const [darkmode  ,setDarkmode ] = useState(false)
    const addNote = (text) => {
     let date = new Date().toLocaleDateString()
      let obj = {
        id : nanoid() , 
        text : text, 
        date : date
      }
      setNotes(prev => [...prev , obj])
    }

    const deleteNote = (id) => {
       let notescopy = [...notes]; 
       let index = notescopy.findIndex((note) => note.id === id)
       notescopy.splice(index , 1)
       setNotes(notescopy)
    }

    const handleSearch = (val) => {
       setSearchText(val)
    }

    return <div className= { darkmode ? "darkmode" : ""}>
      <div className="container">
      <Header toggleDarkMode = {setDarkmode}/>
       <Search handleSearch = {handleSearch} />
       <NoteList notes = {notes.filter(note => note.text.toLowerCase().includes(searchText)) } 
       handleAddNote = {addNote} handleDelete = {deleteNote}/>
    </div>
    </div>
}

export default App