import React, { useState } from "react";
import Header from "./components/Header";
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
    <>
      <Header />
    </>
  );
}

export default App;
