
export const noteReducer = (state = [], action) => {
  console.log('ACTION', action)

  if (action.type=== '@notes/init'){
    return action.payload
  }

  if (action.type === "@notes/created") {
    return [...state, action.payload];
  }

  if (action.type === "@notes/toggle_important") {
    const { id } = action.payload;
    return state.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          important: !note.important,
        };
      }
      return note;
    });
  }
  return state;
};

/* const generatedId = () => Math.floor(Math.random()*999999999 + 1); */

export const createNote = note => {
  return {
    type: "@notes/created",
    payload: {
      content: note
      /* important: false, */
      /* id: generatedId(), */
    },
  };
};

export const toggleImportanceOf = (id) => {
  return {
    type: "@notes/toggle_important",
    payload: { id },
  };
};

export const initNotes = notes=>{
  return{
    type: '@notes/init',
    payload: notes
  }
}

export const setVisibilityFilter = (filter) =>{
  return{
    type: '@notes/visibility_filter',
    payload: filter
  }
}