import React from 'react'
import CarouselComponent from '../../Components/Carousel/Carousel.jsx'
import ListaPeliculas from '../ListaPeliculas/ListaPeliculas.jsx'

export default function HomeSon() {
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <CarouselComponent />
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col">
                    <ListaPeliculas genero="home" />
                </div>
            </div>
        </div>
    </>
  )
}
