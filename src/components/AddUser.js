import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { addUser } from "../redux/action";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const AddUser = ({ modal, handleClose }) => {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    zipcode: "",
  });
  const dispatch = useDispatch();
  const { name, email, phone, city, zipcode } = state;

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || !email || !city || !zipcode) {
      toast.error("please enter a valid address");
    } else {
      setTimeout(() => {
        toast.success("User Data Successfully Added!");
      }, 1000);
      dispatch(addUser(state));
      handleClose();
      console.log("state", state);
    }
  };
  return (
    <Modal show={modal} centered onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              name="name"
              onChange={handleChange}
              value={name}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={handleChange}
              value={email}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Phone"
              name="phone"
              onChange={handleChange}
              value={phone}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter City"
              name="city"
              onChange={handleChange}
              value={city}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridZipCode">
            <Form.Label>ZipCode</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Zip Code"
              name="zipcode"
              onChange={handleChange}
              value={zipcode}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddUser;
