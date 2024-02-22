import { Card } from "react-bootstrap";
import { useCartContext } from "../context/CartContext";
import ShoppingCartManagement from "./ShoppingCartManagement";
type PropType = {
  title: string;
  img: string;
  id: number;
  price: number;
  quantity: number;
};
export default function CardProduct({
  title,
  img,
  id,
  price,
  quantity,
}: PropType) {
  const { getItemQty } = useCartContext();
  const qty: number = getItemQty(id);
  return (
    <Card
      className="py-3 px-1 d-flex flex-column justify-content-between"
      style={{ height: "445px" }}
    >
      <Card.Img
        style={{ height: "240px", maxWidth: "252px" }}
        variant="top"
        src={img}
      />
      <Card.Body className="pb-0 d-flex flex-column justify-content-between">
        <Card.Title
          className="h-5 m-0"
          style={{ fontSize: "1rem", lineHeight: 2, fontWeight: 600 }}
        >
          {title.length > 47 ? title.substring(0, 47).concat("...") : title}
        </Card.Title>
        <div className="d-flex align-items-center w-100 justify-content-between">
          <span className={quantity == 0 ? "text-danger" : "text-success"}>
            {quantity === 0 ? "ناموجود" : quantity}
          </span>
          <span>{price.toString().concat(" تومان")}</span>
        </div>
        {quantity !== 0 ? <ShoppingCartManagement qty={qty} id={id} /> : ""}
      </Card.Body>
    </Card>
  );
}
