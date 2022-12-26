import { useState } from "react"

const AddNote = ({handleAddNote}) => {

   const [textNote ,  setTextNote] = useState("")
   let characterLimit = 200;
   
   const handleTextAreaChange = (e) => {
      if(textNote.length <200) {
         setTextNote(e.target.value)
      }   
}

   const handleSaveClick =() => {
      if(textNote.trim().length < 3) {
         return 
      }
      handleAddNote(textNote)
      setTextNote("")
      
   }
    return <div className="note addnote">
       <textarea rows ="5" cols="10" placeholder = "Add text for the new note" value = {textNote} onChange = {handleTextAreaChange}></textarea>
       <div className="note-footer">
          <small>{characterLimit - textNote.length} remaining </small>
          <button className="add-note-button " onClick={handleSaveClick}> save</button>
       </div>
    </div>
}
export default AddNote