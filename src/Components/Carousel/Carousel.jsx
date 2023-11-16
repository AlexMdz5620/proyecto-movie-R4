import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'

function CarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item>
      <img src="https://imgs.search.brave.com/epX2tZJKQGDOGeFMa4CHq6jAZWRzGeLB-L046CdqRso/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLmJs/b2dzLmVzLzJmZjM0/ZC9zcGlkZXJtYW4t/dG9iZXktbWFndWly/ZS80NTBfMTAwMC5q/cGVn" alt='Image 1' className='carouselSize'/>
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://www.gran-turismo.com/images/c/i13ynTpBw8HAmb.jpg" alt='Image 2' className='carouselSize'/>
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://files.merca20.com/uploads/2023/10/radical-eugenio-derbez.jpg" alt='Image 3' className='carouselSize'/>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;