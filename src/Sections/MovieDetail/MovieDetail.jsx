import React from 'react'
import { useLocation } from 'react-router-dom';
import './MovieDetail.css'

export default function MovieDetail() {

    const location = useLocation();
    const movie = location.state;
    console.log(location);
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col">
                <h1>{movie.genero}</h1>
            </div>
        </div>
        <div className="row data">
            <div className="col img">
                <img src={movie.portada} className='detail-movie-img' />
            </div>
            <div className="col dataTow">
                <h2 className='title'>{movie.titulo}</h2>
                <ul>
                    {movie.actores.map((actor, index) => {
                        return <li key={actor}>{actor}</li>;
                    })}
                </ul>
                <p>Duración: {movie.duracion}</p>
                <p>Sinopsis: {movie.sinopsis}</p>
                <p>Director: {movie.director}</p>
                <p>Clasificaion: {movie.calificacion}</p>
            </div>
        </div>
    </div>
    </>
  )
}
