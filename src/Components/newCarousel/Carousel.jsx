import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';

function CarouselComponent() {
  return (
    <Carousel fade>
      <Carousel.Item className='carouselSize'>
      <img src="https://images5.alphacoders.com/132/thumbbig-1328421.webp" alt='Image 1' />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carouselSize'>
      <img src="https://www.gran-turismo.com/images/c/i13ynTpBw8HAmb.jpg" alt='Image 2' />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carouselSize'>
      <img src="https://files.merca20.com/uploads/2023/10/radical-eugenio-derbez.jpg" alt='Image 3' />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;