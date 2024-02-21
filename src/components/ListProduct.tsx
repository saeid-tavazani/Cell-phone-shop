// import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardProduct from "./CardProduct";
import { products } from "../data";
export default function ListProduct() {
  return (
    <section className="mt-3">
      <Row xs={1} sm={2} md={3} lg={4} xxl={5}>
        {products.map((item, index) => (
          <Col className="p-1" key={index}>
            <CardProduct {...item} />
          </Col>
        ))}
      </Row>
    </section>
  );
}
