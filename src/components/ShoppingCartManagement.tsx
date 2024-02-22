import { Button } from "react-bootstrap";
import { useCartContext } from "../context/CartContext";

export default function ShoppingCartManagement({
  qty,
  id,
}: {
  qty: number;
  id: number;
}) {
  const { addItem, decreaseItem, removeItem } = useCartContext();
  return qty === 0 ? (
    <i
      className="bi bi-plus-circle d-flex"
      style={{
        cursor: "pointer",
        width: "fit-content",
      }}
      onClick={() => addItem(id)}
    ></i>
  ) : (
    <div className="d-flex align-items-center" style={{ gap: ".5rem" }}>
      <div className="d-flex align-items-center" style={{ gap: ".5rem" }}>
        <div
          className="d-flex align-items-center border px-2 rounded-3"
          style={{ height: "41.6px" }}
        >
          <i
            onClick={() => addItem(id)}
            className="bi bi-plus-lg text-success"
            style={{
              verticalAlign: "middle",
              cursor: "pointer",
              fontWeight: 900,
            }}
          ></i>
          <span className="fs-5 mx-2">{qty}</span>
          <i
            onClick={() => decreaseItem(id)}
            className="bi bi-dash-lg text-danger"
            style={{
              verticalAlign: "middle",
              cursor: "pointer",
              fontWeight: 900,
            }}
          ></i>
        </div>
      </div>

      <Button
        onClick={() => removeItem(id)}
        variant="outline-danger"
        style={{ width: "fit-content" }}
      >
        <i className="bi bi-trash" style={{ verticalAlign: "middle" }}></i>
      </Button>
    </div>
  );
}
