import React from "react";
import { Row, Col, Card } from "react-bootstrap";

export default function HomePage() {
  return (
    <Row>
      <Col md={12}>
        <h1>Library</h1>
      </Col>
      <Col md={6}>
        <Card bg="success">
          <Card.Img variant="top" src="/images/students.jpg"></Card.Img>
          <Card.Body>Students</Card.Body>
        </Card>
      </Col>
      <Col md={6}>
        <Card bg="info">
          <Card.Img variant="top" src="/images/books.jpg"></Card.Img>
          <Card.Body>Books</Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
