import React from "react";
import { Card, Table, Button, Row, Col } from "react-bootstrap";
export default class Students extends React.Component {
  render() {
    return (
      <Card>
        <Card.Header>
          <Row>
            <Col md={10}>
              <h1>Students</h1>
            </Col>
            <Col md={2}>
              <Button variant="info" size="lg">
                Add student
              </Button>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <Table hover bordered>
            <thead>
              <tr>
                <th>Name</th>
                <th>Classe</th>
                <th>Age</th>
                <th>Tel</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.props.data.map((book, i) => (
                <tr key={i}>
                  <td>{book.name}</td>
                  <td>{book.classe}</td>
                  <td>{book.age}</td>
                  <td>{book.tel}</td>
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
