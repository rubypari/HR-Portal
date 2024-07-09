import React, { useState } from 'react';
import { Table, Button, Form, Container } from 'react-bootstrap';

const EmployeePage = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'John Doe', position: 'Developer' },
    { id: 2, name: 'Jane Smith', position: 'Designer' }
  ]);
  const [newEmployee, setNewEmployee] = useState({ name: '', position: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee({ ...newEmployee, [name]: value });
  };

  const handleAddEmployee = () => {
    setEmployees([...employees, { id: employees.length + 1, ...newEmployee }]);
    setNewEmployee({ name: '', position: '' });
  };

  return (
    <Container>
      <h1>Employee Management</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
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
          <Button variant="primary" onClick={handleAddEmployee}>
            Add Employee
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default EmployeePage;
