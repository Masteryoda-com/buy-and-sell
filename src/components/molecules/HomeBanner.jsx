import Carousel from 'react-bootstrap/Carousel';
import './HomeBanner.css';
import HomeBanner1 from '../../assets/img/home_banner_1.jpg';
import HomeBanner2 from '../../assets/img/home_banner_2.jpg';
import HomeBanner3 from '../../assets/img/home_banner_3.jpg';

function HomeBanner() {
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={HomeBanner1}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={HomeBanner2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={HomeBanner3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeBanner;