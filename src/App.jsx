import { useEffect, useState } from "react";
import NoteForm from "./Components/NoteForm";
import NoteList from "./Components/NoteList";
import Loader from "./Components/Loader";
import EmptyState from "./Components/EmptyState";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const addNote = (note) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="app">
      <h1>Notes App</h1>

      <NoteForm onAddNote={addNote} />

      {notes.length === 0 ? (
        <EmptyState />
      ) : (
        <NoteList notes={notes} onDelete={deleteNote} />
      )}
    </div>
  );
}

export default App;

