
import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NavbarSetup from './components/NavbarSetup';
import LoginPage from './components/LoginPage';

function App() {
  return (
      <div className="App">
        <NavbarSetup  />
        <Container>
          <Row className="justify-content-md-center">
            <Col md={5} className="border">
              <LoginPage  />
            </Col>
          </Row>
        </Container>
      </div>
  );
}

export default App;
