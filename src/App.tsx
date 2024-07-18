import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import { CardProvider } from "./context/CartContext";
import { Home, Cart, Payment, Transport, Delievery } from "./page";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
export default function App() {
  return (
    <CardProvider>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/transport" element={<Transport />} />
          <Route path="/delievery" element={<Delievery />} />
        </Routes>
      </Container>
      <Footer />
    </CardProvider>
  );
}
