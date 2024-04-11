import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './AddItem.css';

function AddItem() {
  return (
    <div className="addItem-data">
      <h1 className='header'>Add Item</h1>
      <Form className="addform">
        <Form.Group controlId="formExercise" className='formExercises'>
          <Form.Label className='form-label'>Exercise</Form.Label>
          <Form.Control type="text" placeholder="Enter exercise" />
          <Form.Group className='smallform' controlId="formTime">
            <Form.Label>Time Performed</Form.Label>
            <Form.Control type="number" placeholder="Enter time performed" />
          </Form.Group>
        </Form.Group>

        <Form.Group controlId="formFood">
          <Form.Label>Food</Form.Label>
          <Form.Control type="text" placeholder="Enter food" />
        </Form.Group>

        <Form.Group className='smallform' controlId="formSleep">
          <Form.Label>Sleep Log</Form.Label>
          <Form.Control type="number" placeholder="Enter hours of sleep" />
        </Form.Group>

        <Button variant="primary" type="submit" className='submit-btn'>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AddItem;