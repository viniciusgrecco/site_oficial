import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './carrosel.css';

const MyCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <Carousel
      responsive={responsive}
      autoPlay={true}
      autoPlaySpeed={3000}
      infinite={true}
      arrows={false} // Desabilita as setas de navegação
    >
      <img src="src/assets/carrossel1.jpeg" alt="Imagem 1" />
      <img src="src/assets/carrossel2.jpeg" alt="Imagem 2" />
      <img src="src/assets/carrossel3.jpeg" alt="Imagem 3" />
    </Carousel>
  );
};

export default MyCarousel;
