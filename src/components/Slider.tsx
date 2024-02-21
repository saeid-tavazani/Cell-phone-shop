import Carousel from "react-bootstrap/Carousel";
import { slider } from "../data";
export default function Slider() {
  return (
    <Carousel className="rounded-3 overflow-hidden">
      {slider.map((item) => (
        <Carousel.Item key={item.id} className="">
          <img className="d-block w-100" src={item.img} alt={item.title} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
