import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Card.css";

export default function CardComponent(props) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handlerLike = () => {
    setIsFavorite(false);
  };

  return (
    <>
      <div className="card-movie backgroudPurple">
        <div >
          <img className="card-image" src={props.portada} alt="" />
         <div className="card-title-custom">
         <h1 className="titles-custom">{props.title}</h1>
          {isFavorite ? (
            <FaHeart className="icon-heart" onClick={handlerLike} />
          ) : (
            <FaRegHeart
              className="icon-heart-empty"
              onClick={() => {
                setIsFavorite(true);
              }}
            />
          )}
         </div>
            <p className="text-custom">{props.description}</p>
            <div className="card-play">
              <span>Play</span>
            </div>
        </div>
      </div>
    </>
  );
};