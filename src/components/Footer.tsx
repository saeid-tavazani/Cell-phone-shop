import { Container, Nav } from "react-bootstrap";
import Logo from "./Logo";
import { navMenu } from "../data";

export default function Footer() {
  return (
    <footer className="mt-5 bg-dark">
      <Container className="d-flex flex-column pt-5">
        <div className="row mb-4">
          <div className="flex flex-column col">
            <Logo />
            <p className="text-light w-75 mt-2">
              توضیحات مربوطه توضیحات مربوطه توضیحات مربوطه توضیحات مربوطه
              توضیحات مربوطه
            </p>
            <div className="d-flex align-items-center gap-2">
              <a className="text-light h2" href="#" target="_blank">
                <i className="bi bi-instagram"></i>
              </a>
              <a className="text-light h2" href="#" target="_blank">
                <i className="bi bi-telegram"></i>
              </a>
              <a className="text-light h2" href="#" target="_blank">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>
          <div className="flex flex-column col">
            <p className="text-light">لینک های مرتبط</p>
            <Nav className="flex-column mt-2">
              {navMenu.map((item) => (
                <Nav.Link className="text-light" key={item.id} href={item.path}>
                  {item.text}
                </Nav.Link>
              ))}
            </Nav>
          </div>
        </div>
        <div className="border-top border-light">
          <p className="text-light text-center p-3">
            © کلیه حقوق این سایت متعلق به خانه موبایل است
          </p>
        </div>
      </Container>
    </footer>
  );
}
