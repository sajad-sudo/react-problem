import "./App.css";
import { useState } from "react";
import AddNewNote from './component/AddNewNote'
import NoteList from './component/NoteList'
function App() {
  const[notes, setNotes] = useState([])
  const handleAddNote = (newNote) => {
    setNotes((prevNote) => [...prevNote, newNote])
  }
  return(
    <div className="container">
      <div className="note-header">note header</div>
      <div className="note-app">
        <AddNewNote onAddNote={handleAddNote}/>
        <NoteList notes={notes}/>
      </div>
    </div>
  );
}

export default App;
