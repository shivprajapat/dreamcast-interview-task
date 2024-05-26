import React from "react";
import { Button, Card, ListGroup, Modal } from "react-bootstrap";

const ViewUser = ({ modal, show, handleClose }) => {
  console.log(show);
  const itemCls = "d-flex justify-content-between align-items-start w-100";
  return (
    <Modal show={modal} centered onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>
          <Button size="sm">{show.id}</Button> User Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card>
          <Card.Header>
            <b>Name :</b> {show.name}
          </Card.Header>
          <Card.Body>
            {/* <Card.Title>{show.name}</Card.Title> */}
            <ListGroup as="ol" numbered horizontal className="gap-2 mb-2">
              <ListGroup.Item as="li" className={itemCls}>
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Email</div>
                  {show.email}
                </div>
              </ListGroup.Item>
              <ListGroup.Item as="li" className={itemCls}>
                <div className="ms-2 me-auto">
                  <div className="fw-bold">City</div>
                  {show.city}
                </div>
              </ListGroup.Item>
            </ListGroup>
            <ListGroup as="ol" numbered>
              <ListGroup.Item as="li" className={itemCls}>
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Phone</div>
                  {show.phone}
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
          <Card.Footer>
            <b>Zip Code:</b> {show.zipcode}
          </Card.Footer>
        </Card>
      </Modal.Body>
    </Modal>
  );
};

export default ViewUser;
