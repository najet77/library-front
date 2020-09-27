import React from "react";
import HomePage from "./components/HomePage";
import BooksPage from "./components/BooksPage";
import StudentsPage from "./components/StudentsPage";
import { Container } from "react-bootstrap";
const livres = [
  { name: "blabla", author: "foulene", isbn: 54263114566 },
  { name: "test book", author: "foulene1", isbn: 5426311444566 },
  { name: "blabla22", author: "foulene foulani", isbn: 54263777114566 },
  { name: "blablavcvv", author: "foulene 2", isbn: 542634444566 },
];

const eleves = [
  { name: "blabla", classe: "foulene", age: 21, tel: 26314589 },
  { name: "blabla", classe: "foulene", age: 18, tel: 26314589 },
  { name: "blabla", classe: "foulene", age: 17, tel: 26314589 },
  { name: "blabla", classe: "foulene", age: 18, tel: 26314589 },
];

function App() {
  return (
    <div className="App">
      <Container>
        <StudentsPage data={eleves} />
      </Container>
    </div>
  );
}

export default App;
