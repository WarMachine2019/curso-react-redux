import { useEffect } from "react";
import { useDispatch } from "react-redux";
import NewNote from "./components/NewNote";
import Notes from "./components/Notes";
import { getAll } from "./services/notes";
import { initNotes } from "./reducers/noteReducer";

const App = () => {

  const filterSelected = value =>{
    console.log(value)
  }

  const dispatch = useDispatch()

  useEffect(()=>{
    getAll().then(notes => {
      dispatch(initNotes(notes))
    })
  }, [dispatch])

  return (
    <div>
      <NewNote />
      <div>
        all
        <input type='radio' name='filter' onChange={()=>filterSelected('ALL')}/>
        
        important
        <input type='radio' name='filter' onChange={()=>filterSelected('IMPORTANT')}/>
        
        noimportant
        <input type='radio' name='filter' onChange={()=>filterSelected('NOT-IMPORTANT')}/>
        <Notes />
      </div>
    </div>
  );
};

export default App;
