import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { addUser, getSingleUser } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const EditUser = ({ modal, show, handleClose }) => {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    zipcode: "",
  });
  const { name, email, phone, city, zipcode } = state;

  const dispatch = useDispatch();
  const { id } = useParams();

  const user = useSelector((state) => state.user);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  console.log('state', state)
  useEffect(() => {
    dispatch(getSingleUser(id))
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (user) {
      setState({ ...user })
    }
  }, [user])
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
          <Modal.Title>Edit User</Modal.Title>
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

export default EditUser;
