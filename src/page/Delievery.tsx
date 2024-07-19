import { Row } from "react-bootstrap";
import { useCartContext } from "../context/CartContext";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import StatusShipping from "../components/StatusShipping";
import Form from "react-bootstrap/Form";
import moment from "moment-jalaali";

// moment.loadPersian({ dialect: "persian-modern" });
// let newDate = String(Date.now());
// console.log("====================================");
// console.log(Date.now());
// console.log("====================================");
// let days = [];
// for (let i = 0; i < 7; i++) {
//   const nextDate = moment(newDate).add(i, "days");
//   const shamsiNextDate = nextDate.format("jYYYY/jMM/jDD");
//   const nextDayOfWeek = nextDate.format("dddd");
//   days.push([nextDayOfWeek, shamsiNextDate]);
// }
const Delievery = () => {
  const { cartQty, cartItems, getItemQty, total } = useCartContext();
  const shippingCost = 57000;
  console.log(Date.now());
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
