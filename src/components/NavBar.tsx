import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "./Logo";
import { navMenu } from "../data";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-white shadow-sm">
      <Container>
        <Navbar.Text>
          <Logo />
        </Navbar.Text>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ms-2">
            {navMenu.map((item) => (
              <Nav.Link key={item.id} href={item.path}>
                {item.text}
              </Nav.Link>
            ))}
          </Nav>
          <Nav>
            <Nav.Link
              className="rounded-circle border p-0 d-flex align-items-center justify-content-center position-relative"
              style={{ width: "35px", height: "35px" }}
              href="/cart"
            >
              <i className="bi bi-bag"></i>
              <span
                className="position-absolute bg-primary rounded-circle text-light d-flex align-items-center justify-content-center"
                style={{
                  width: "1rem",
                  height: "1rem",
                  fontSize: "0.7rem",
                  bottom: "-4px",
                  right: "-4px",
                }}
              >
                1
              </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
