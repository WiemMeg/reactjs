import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Navbar from "react-bootstrap/Navbar";

const App = () => {
  return (
    <div className="App">
      <div className="">
        <Card>
          <Card.Header>
            <Nav variant="tabs" defaultActiveKey="#first">
              <Nav.Item>
                <Nav.Link href="#first">Active</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#link">Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#disabled" disabled>
                  Disabled
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>Hello card1</Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              contenu de la première carte
            </Card.Text>
             <Card.Body>Hello card2</Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              contenu de la seconde carte
            </Card.Text>
             <Card.Body>Hello card3</Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              contenu de la troisieme carte
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          
        </Card>
      </div>
    </div>
  );
}

export default App;
