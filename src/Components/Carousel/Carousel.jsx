import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel';

import './Carousel.css'

export default function CarouselComponent() {
  return (
    <Carousel infiniteLoop centerMode>
      <div>
          <img src="https://images5.alphacoders.com/132/thumbbig-1328421.webp" alt='Image 1' />
      </div>
      <div>
          <img src="https://www.gran-turismo.com/images/c/i13ynTpBw8HAmb.jpg" alt='Image 2' />
      </div>
      <div>
          <img src="https://files.merca20.com/uploads/2023/10/radical-eugenio-derbez.jpg" alt='Image 3' />
      </div>
    </Carousel>
  )
}
