import { Link } from "react-router-dom";
export default function Logo({ width = "70px" }) {
  return (
    <Link to="/">
      <img width={width} src="/Logo.svg" alt="logo" />
    </Link>
  );
}
