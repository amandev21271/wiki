import logo from "../assets/logo.svg";
import './HeaderLarge.css';
const HeaderLarge = () => {
  return (
    <div className="logo">
      <img className="logo-img" src={logo} />
    </div>
  );
};

export default HeaderLarge;
