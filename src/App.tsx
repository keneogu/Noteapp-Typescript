import React, { useState } from "react";
import Header from "./components/Header";
import NotesList from "./components/NotesList";
import CreateNotes from "./components/CreateNotes";
import { Note } from "./models/note.models";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  const [notes, setNotes] = useState<Note[]>([{
    id: (new Date).toString(),
    title: "Meetings",
    text: "Schedule a meeting",
    color: '#dfdfdf',
    date: (new Date).toString()
  }]);
  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            <NotesList  notes={notes} setNotes={setNotes}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNotes  notes={notes} setNotes={setNotes}/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
