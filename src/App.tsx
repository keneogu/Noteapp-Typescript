import React, { useState } from "react";
import { Notes } from "./models/note.models";
import "./App.css";

function App() {
  const [note, setNotes] = useState<Notes[]>([{
    id: (new Date).toString(),
    title: "Meetings",
    text: "Schedule a meeting",
    color: '#dfdfdf',
    date: (new Date).toString()
  }]);
  return (
    <div className="App">
      <h1>NoteApp</h1>
    </div>
  );
}

export default App;
