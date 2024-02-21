import Carousel from "react-bootstrap/Carousel";
import { slider } from "../data";
export default function Slider() {
  return (
    <Carousel data-bs-theme="dark">
      {slider.map((item) => (
        <Carousel.Item>
          <img className="d-block w-100" src={item.img} alt={item.title} />
          <Carousel.Caption>
            <h5>{item.title}</h5>
            <p>{item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
