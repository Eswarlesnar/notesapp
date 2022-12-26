import AddNote from "./AddNote";
import Note from "./Note";
const NoteList = ({notes , handleAddNote ,handleDelete}) => {
    return ( <div className="notes-list">
        <AddNote handleAddNote = {handleAddNote}/>
         {notes.map((note) => {
            return <Note key={note.id} id ={note.id} text ={note.text} date ={note.date} handleDelete = {handleDelete}/>
         })}
    </div>)
} 

export default NoteList;