import React from "react";
import { Card, Table, Button, Row, Col } from "react-bootstrap";
export default class Books extends React.Component {
  render() {
    return (
      <Card>
        <Card.Header>
          <Row>
            <Col md={10}>
              <h1>Books</h1>
            </Col>
            <Col md={2}>
              <Button variant="info" size="lg">
                Add book
              </Button>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <Table hover bordered>
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Pages</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.props.data.map((book, i) => (
                <tr key={i}>
                  <td>{book.name}</td>
                  <td>{book.author}</td>
                  <td>{book.isbn}</td>
                  <td>
                    <Row>
                      <Col md={6}>
                        <Button variant="primary">Update</Button>
                      </Col>
                      <Col md={6}>
                        <Button variant="danger">Delete</Button>
                      </Col>
                    </Row>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    );
  }
}
