<<<<<<< HEAD:src/components/Signup.js

import Form from 'react-bootstrap/Form';
import {
Link
} from "react-router-dom";
=======
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

>>>>>>> 0c415f97ffc4b647082d3ef4b2c5eb0d740ae6b2:Client/src/components/Signup.js
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Signup() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={5} className="border">
            <Form className="p-4">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
<<<<<<< HEAD:src/components/Signup.js
                <Link to='/'>
                <button>Submit</button>
                </Link>
                <Link to='/'>Already have an account? Log in</Link>
=======
                <Button variant="primary">Submit</Button>{' '}
>>>>>>> 0c415f97ffc4b647082d3ef4b2c5eb0d740ae6b2:Client/src/components/Signup.js
            </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;