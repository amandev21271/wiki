import "./Header.css";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="logo-wrapper">
      <Link to="/" rel="noreferrer">
        <img className="logo-img-sm" src={logo} />
      </Link>
    </div>
  );
};

export default Header;
