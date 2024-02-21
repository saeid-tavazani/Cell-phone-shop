import { Link } from "react-router-dom";
export default function Logo() {
  return (
    <Link to="/">
      <img width="70px" src="/public/Logo.svg" alt="logo" />
    </Link>
  );
}
