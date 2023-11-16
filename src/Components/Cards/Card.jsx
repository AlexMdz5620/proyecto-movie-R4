import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import EmptyImg from "../../assets/empty.png"
import "./Card.css";

export default function CardComponent(props) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handlerLike = () => {
    setIsFavorite(false);
  };
  const handlerImgError = (e) => {
    e.target.src = EmptyImg;
  }

  return (
    <>
      <div className="card-movie backgroudPurple">
        <div>
          {props.portada == null ? <img className="card-image" src={EmptyImg} alt="" /> : <img className="card-image" src={props.portada} alt="" onError={handlerImgError} />}
          <div className='card-inf'>
            <div  className="card-title-custom">
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
          </div>
          <div className="card-play">
            <Link to={`/${props.item.genero}/${props.item.titulo}`} state={props.item}>
              <button className="btn btn-primary">+ INF</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};