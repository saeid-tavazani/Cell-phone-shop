import { Row } from "react-bootstrap";
import { useCartContext } from "../context/CartContext";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import StatusShipping from "../components/StatusShipping";
import Form from "react-bootstrap/Form";
import moment from "moment-jalaali";
import { useState } from "react";

moment.loadPersian({ dialect: "persian-modern" });
let newDate = String(new Date());
let days = [];
for (let i = 0; i < 7; i++) {
  const nextDate = moment(newDate).add(i, "days");
  const shamsiNextDate = nextDate.format("jYYYY/jMM/jDD");
  const nextDayOfWeek = nextDate.format("dddd");
  days.push([nextDayOfWeek, shamsiNextDate]);
}

const Delievery = () => {
  const { cartQty, cartItems, getItemQty, total } = useCartContext();
  const [dateDelivery, setDateDelivery] = useState(days[0][1]);
  const shippingCost = 57000;
  if (!cartQty) {
    return (
      <div className="d-flex align-items-center gap-2">
        <i className="bi bi-cart3 fs-1"></i>
        <h1> سبد خرید شما خالی است!</h1>
      </div>
    );
  }
  return (
    <>
      <StatusShipping status={1} />
      <Row className="gap-2 align-items-start">
        <Col lg={8} md={12} className="d-flex flex-column gap-4">
          <div className="w-100 d-flex gap-2 justify-content-around border border-2 rounded-3 p-4 my-4">
            <Form.Check // prettier-ignore
              type={"radio"}
              label={`ارسال به ادرس منتخب`}
              name="send"
              checked
            />

            <Form.Check type={"radio"} name="send" label={`تحویل حضوری`} />
          </div>
          <div className="w-100 d-flex gap-3 flex-wrap justify-content-around border border-2 rounded-3 p-4 my-4">
            {days.map((item) => (
              <div
                key={item[1]}
                onClick={() => setDateDelivery(item[1])}
                className={`d-flex flex-column gap-1 align-items-center ${
                  item[1] === dateDelivery ? "text-primary" : ""
                }`}
                style={{ cursor: "pointer" }}
              >
                <span>{item[0]}</span>
                <span>{item[1]}</span>
              </div>
            ))}
          </div>
        </Col>

        <Col className="border border-2 rounded-3 p-4 d-flex flex-column justify-content-between">
          <div>
            <div className="d-flex align-items-center justify-content-between ">
              <span>قیمت کالاها ({cartQty}) :</span>
              <span>{total.toLocaleString()}</span>
            </div>
            <div className="d-flex align-items-center justify-content-between my-2">
              <span> هزینه ارسال :</span>
              <span>{shippingCost.toLocaleString()}</span>
            </div>
            <div className="d-flex align-items-center justify-content-between ">
              <span>قیمت نهایی :</span>
              <span>{(total + shippingCost).toLocaleString()}</span>
            </div>
          </div>
          <Button variant="info" className="text-white w-100 mt-5">
            انتخاب زمان ارسال
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Delievery;
