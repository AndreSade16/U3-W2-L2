import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav } from "react-bootstrap";

const BookstoreNavbar = () => {
  return (
    <Navbar expand="md" style={{ backgroundColor: "#3d1800" }} variant="dark">
      <Container fluid={true} className="d-flex justify-content-between">
        <Navbar.Brand href="#">Bookstore</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="text-end justify-content-end"
        >
          <Nav className="">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BookstoreNavbar;
