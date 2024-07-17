import { Row } from "react-bootstrap";
import { useCartContext } from "../context/CartContext";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { products } from "../data";
import ShoppingCartManagement from "../components/ShoppingCartManagement";

export default function Cart() {
  const { cartQty, cartItems, getItemQty } = useCartContext();
  if (!cartQty) {
    return (
      <div className="d-flex align-items-center gap-2">
        <i className="bi bi-cart3 fs-1"></i>
        <h1> سبد خرید شما خالی است!</h1>
      </div>
    );
  }

  const total = cartItems.reduce((total, currentItem) => {
    const product = products.find((item) => item.id === currentItem.id);
    return total + (product?.price || 0) * currentItem.qty;
  }, 0);

  return (
    <Row className="gap-2">
      <Col lg={8} md={12} className="d-flex flex-column gap-4">
        {cartItems.map((cartItem, index) => {
          const product = products.find((item) => item.id === cartItem.id);
          if (product)
            return (
              <Row className="border border-2 rounded-3 p-4 gap-1" key={index}>
                <Col
                  sm={3}
                  className="d-flex flex-column gap-1 align-items-center"
                >
                  <img
                    className="w-100"
                    src={product?.img}
                    alt={product?.title}
                  />
                  <ShoppingCartManagement
                    id={product?.id}
                    maximumOrderQuantity={product?.quantity || 1}
                    qty={getItemQty(product.id)}
                  />
                </Col>
                <Col>
                  <h2 className="fs-5">{product?.title}</h2>
                  <p>{product?.description.substring(0, 200).concat("...")}</p>
                  <span className="fw-bold">تومان : {product?.price}</span>
                </Col>
              </Row>
            );
        })}
      </Col>
      <Col className="border border-2 rounded-3 p-4 d-flex flex-column justify-content-between">
        <div>
          <div className="d-flex align-items-center justify-content-between ">
            <span>قیمت کالاها ({cartQty}) :</span>
            <span>{total}</span>
          </div>
          <div className="d-flex align-items-center justify-content-between my-2">
            <span>میزان تخفیف :</span>
            <span>0</span>
          </div>
          <div className="d-flex align-items-center justify-content-between ">
            <span>قیمت نهایی :</span>
            <span>{total}</span>
          </div>
        </div>
        <Button variant="info" className="text-white w-100">
          ثبت سفارش
        </Button>
      </Col>
    </Row>
  );
}
