import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home, Cart, Payment, Transport } from "./page";
import NavBar from "./components/NavBar";
export default function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/transport" element={<Transport />} />
        </Routes>
      </Container>
    </>
  );
}
