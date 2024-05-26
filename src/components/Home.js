import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Spinner, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteUsers, loadUsers } from "../redux/action";
import AddUser from "./AddUser";
import toast, { Toaster } from "react-hot-toast";
import ViewUser from "./ViewUser";
import EditUser from "./EditUser";

const Home = () => {
  const dispatch = useDispatch();
  const [view, setView] = useState(false);
  const [edit, setEdit] = useState(false);

  const [modal, setModal] = useState({
    add: false,
    view: false,
    edit: false,
  });

  const modalHandler = (key) => {
    setModal((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const { users, loading } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(loadUsers());
    // eslint-disable-next-line
  }, []);
  const deleteHandler = (id) => {
    dispatch(deleteUsers(id));
    toast.success("User Data Delete Successfully !");
  };
  const viewHandle = (user) => {
    setView(user);
  };
  const editHandle=(user)=>{
    setEdit(user)
  }
  return (
    <section>
      <Container>
        <Row>
          <Col lg={10} className="mx-auto">
            <Button
              variant="primary"
              onClick={() => modalHandler("add")}
              className="mb-3"
            >
              Add User{" "}
            </Button>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>City</th>
                  <th>Zip Code</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={7} className="text-center">
                      <Spinner animation="border" role="status" />
                    </td>
                  </tr>
                ) : (
                  users.map((user, index) => {
                    const { id, name, phone, email, city, zipcode } = user;

                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>{phone}</td>
                        <td>{city}</td>
                        <td>{zipcode}</td>
                        <td>
                          <div className="d-flex">
                            <Button
                              variant="info"
                              size="sm"
                              onClick={() => {
                                editHandle(user);
                                modalHandler("edit");
                              }}
                            >
                              Edit
                            </Button>
                            <Button
                              variant="warning"
                              size="sm"
                              onClick={() => {
                                viewHandle(user);
                                modalHandler("view");
                              }}
                              className="mx-2"
                            >
                              View
                            </Button>
                            <Button
                              variant="danger"
                              size="sm"
                              onClick={() => deleteHandler(id)}
                            >
                              Delete
                            </Button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <AddUser modal={modal.add} handleClose={() => modalHandler("add")} />
      <ViewUser
        modal={modal.view}
        handleClose={() => modalHandler("view")}
        show={view}
      />
      <EditUser
        modal={modal.edit}
        handleClose={() => modalHandler("edit")}
        show={edit}
      />

      <Toaster position="top-right" reverseOrder={false} />
    </section>
  );
};

export default Home;
