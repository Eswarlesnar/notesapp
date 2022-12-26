import {MdDeleteForever} from "react-icons/md"

const Note = ({id ,text ,date, handleDelete}) => {
    const handleDeleteIconClick = () => {
        handleDelete(id)
    }
    return (<div className="note">
         <span className="textcontainer">{text}</span>
         <div className="note-footer">
            <small>{date}</small>
            <MdDeleteForever className="delete-icon" onClick = {handleDeleteIconClick}/>
         </div>
    </div>)
}

export default Note