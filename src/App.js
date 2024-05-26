import Home from "./components/Home";
import "./App.css";
import { Alert, Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <div className="mt-5">
      <Container>
        <Row>
          <Col lg={10} className="mx-auto">
            <Alert variant="primary" className="text-center">
              DreamCast Interview Todo App
            </Alert>
          </Col>
        </Row>
      </Container>
      <Home />
    </div>
  );
}

export default App;
