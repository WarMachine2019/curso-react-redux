import { toggleImportanceOf } from "../reducers/noteReducer";
import { useDispatch, useSelector } from "react-redux";


function Note({toggleImportant, note}){
  return (
    <li key={note.id} onClick={() => toggleImportant(note.id)}>
      {note.content}
      <strong>
        {
        note.important 
        ? "important" 
        : "not import"}
        
      </strong>
    </li>
  );
}

export default function NotesContainer(){
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const toggleImportant = (id) => {
    dispatch(toggleImportanceOf(id));
  };

  return <Notes notes={notes} toggleImportant={toggleImportant}/>
}


function Notes({notes, toggleImportant}) {

  return (
    <ul>
      {
        notes.map(
          note => <Note note={note} toggleImportant={toggleImportant}/>
        ) 
      }
    </ul>
  );
}
