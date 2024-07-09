import React, { useState ,useEffect} from 'react';
import { Table, Button, Form, Container } from 'react-bootstrap';
import axios from 'axios';

const EmployeePage = () => {

  const [employees,setEmployees]=useState([]);
  const [newEmployee, setNewEmployee] = useState({ name: '', position: '' });

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async() => {
    try {
      const response = await axios.get('http://localhost:5000/employees');
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const handleAddEmployee = async () => {
    try {
      const response = await axios.post('http://localhost:5000/employees', newEmployee);
      setEmployees([...employees, response.data]);
      setNewEmployee({ name: '', position: '' });
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee({ ...newEmployee, [name]: value });
  };


  return (
    <Container>
      <h1>Employee Management</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.position}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="form-container">
        <h2>Add New Employee</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={newEmployee.name}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Position</Form.Label>
            <Form.Control
              type="text"
              name="position"
              value={newEmployee.position}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Button variant="primary" onClick={handleAddEmployee} >
            Add Employee
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default EmployeePage;
