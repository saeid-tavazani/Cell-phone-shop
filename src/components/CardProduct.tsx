import { Card, Button } from "react-bootstrap";
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
    <Card className="py-3 px-1" style={{ height: "412px" }}>
      <Card.Img
        style={{ height: "240px", maxWidth: "252px" }}
        variant="top"
        src={img}
      />
      <Card.Body className="pb-0">
        <Card.Title
          className="h-5 "
          style={{ fontSize: "1rem", lineHeight: 2, fontWeight: 600 }}
        >
          {title.length > 47 ? title.substring(0, 47).concat("...") : title}
        </Card.Title>
        <ShoppingCartManagement qty={qty} id={id} />
      </Card.Body>
    </Card>
  );
}
