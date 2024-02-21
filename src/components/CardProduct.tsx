import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
type PropType = {
  title: string;
  description: string;
  img: string;
  id: number;
};
export default function CardProduct({ title, description, img, id }: PropType) {
  return (
    <Card className="py-3 px-1 ">
      <Card.Img style={{ height: "240px" }} variant="top" src={img} />
      <Card.Body className="pb-0">
        <Card.Title
          className="h-5 "
          style={{ fontSize: "1rem", lineHeight: 2, fontWeight: 600 }}
        >
          {title.length > 47 ? title.substring(0, 47).concat("...") : title}
        </Card.Title>
        <i className="bi bi-plus-circle"></i>
      </Card.Body>
    </Card>
  );
}
