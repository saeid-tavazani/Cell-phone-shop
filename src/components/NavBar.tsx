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
          <Nav className="me-auto m">
            {navMenu.map((item) => (
              <Nav.Link key={item.id} href={item.path}>
                {item.text}
              </Nav.Link>
            ))}
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
