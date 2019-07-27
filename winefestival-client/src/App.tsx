import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const App: React.FC = () => {
  return (
    <Container>
      <Row className="row">
        <Col xs={12}>
          <h1>My New React Bootstrap SPA</h1>
          <Button>Look, I'm a button!</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
