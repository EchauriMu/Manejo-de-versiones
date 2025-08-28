import React from 'react';
import { Image } from 'antd';
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import amenidadesData from './amenidadesData';


const AmenidadesCarousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = React.useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
    mode: "snap",
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    }
  });

  const cardStyle = {
    backgroundColor: 'Transparent',
    borderRadius: '8px',
    height: '500px',
    padding: '16px',
    position: 'relative'
  };

  const titleStyle = {
    fontSize: '16px',
    fontWeight: '600',
    color: '#262626',
    margin: '0 0 16px 0',
    padding: '0',
    borderBottom: '1px solid #f0f0f0',
    paddingBottom: '8px'
  };

  const slideContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  };

  const slideTitleStyle = {
    fontSize: '18px',
    fontWeight: '600',
    color: '#262626',
    margin: '0 0 10px 0',
    textAlign: 'center'
  };

  // Amenidades y títulos manuales (todas las imágenes AME)
  const data = [
    {
      id: 1,
      title: 'Rooftop Infinity Pool',
      image: '/AME/ARTWALK AME 1 HD.webp',
    },
    {
      id: 2,
      title: 'Rooftop Infinity Pool',
      image: '/AME/ARTWALK AME 2 HD.webp',
    },
    {
      id: 3,
      title: 'Rooftop Infinity Pool',
      image: '/AME/ARTWALK AME 3 HD.webp',
    },
    {
      id: 4,
      title: 'Rooftop Infinity Pool',
      image: '/AME/ARTWALK AME 4 HD.webp',
    },
    {
      id: 5,
      title: 'Cenote-Style Cold-Water Pool',
      image: '/AME/ARTWALK AME 5 HD.webp',
    },
    {
      id: 6,
      title: 'Gym Exterior',
      image: '/AME/Exterior Gimnasio 2.webp',
    },
    {
      id: 7,
      title: 'Fire Pit',
      image: '/AME/Fire Pit.webp',
    },
    {
      id: 8,
      title: 'Gym Interior',
      image: '/AME/Interior Gimnasio.webp',
    },
    {
      id: 9,
      title: 'Yoga Deck',
      image: '/AME/Yoga Deck.webp',
    },
  ];

  return (
    <div style={cardStyle}>
     <div className="keen-slider" ref={sliderRef} style={{ position: 'relative', height: '400px' }}>
        {data.map((amenidad) => (
          <div className="keen-slider__slide" key={amenidad.id} style={{ textAlign: 'center' }}>
            <div style={slideContentStyle}>
              <h4 style={slideTitleStyle}>{amenidad.title}</h4>
              <Image
                src={amenidad.image}
                alt={amenidad.title}
                style={{ 
                  width: '100%', 
                  height: '380px', 
                  objectFit: 'cover', 
                  borderRadius: '8px' 
                }}
                preview={true}
              />
            </div>
          </div>
        ))}
      </div>
      {loaded && instanceRef.current && (
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  border: 'none',
                  margin: '0 4px',
                  background: currentSlide === idx ? '#fa8c16' : '#ddd',
                  cursor: 'pointer',
                  outline: 'none',
                  boxShadow: currentSlide === idx ? '0 0 4px #fa8c16' : 'none',
                  transition: 'all 0.3s ease'
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AmenidadesCarousel;