import { redirect, useNavigate } from "react-router-dom";
import "./Card.css";

const Card = ({ title, description }) => {
  const navigate = useNavigate();
  const keyword = title;
  console.log(keyword);
  const handleClick = (e) => {
    e.preventDefault();
    console.log(keyword);
    navigate(`/wiki/${title}`);
  };
  return (
    <div className="card card-blog" onClick={handleClick}>
      <div className="table">
        {/* <h1>{title}</h1> */}
        {/* <h6 className="category text-info">{title}</h6> */}
        <div className="card-description"> {description} </div>
      </div>
    </div>
  );
};

export default Card;
