import React from "react";
import HomePage from "./components/HomePage";
import BooksPage from "./components/BooksPage";
import StudentsPage from "./components/StudentsPage";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container>
        <BooksPage />
      </Container>
    </div>
  );
}

export default App;
