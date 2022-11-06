import {
  Link
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack';




function DashboardPage(){

  return(
<>

    <Navbar bg="primary" variant="dark" className="text-right">

      <Container>
      <Stack direction="horizontal" gap={3}>
        <Navbar.Brand></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Text>
            <div className="text-right">
              <Link to ="/"><button variant="secondary">Logout</button></Link>
            </div>
          </Navbar.Text>
        </Navbar.Collapse>
        </Stack>
      </Container>
    </Navbar>
    <h1>Welcome to the Goal Dashboard!</h1>


    <Link to='/newgoals'>
    <button>Submit New Goal</button>
    </Link>

    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Goal Name</th>
        <th>$ Amount Goal</th>
        <th>Scheduled Savings</th>
        <th>Time Estimate</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
    </Table>
</>


)}



export default DashboardPage;
