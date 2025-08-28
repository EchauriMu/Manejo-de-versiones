import React, { useState } from 'react';
import { Card, Typography, Space, Image } from 'antd';
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const { Title } = Typography;

function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${props.left ? "arrow--left" : "arrow--right"}${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      style={{ width: 40, height: 40, fill: '#fa8c16', cursor: props.disabled ? 'not-allowed' : 'pointer', background: '#fff', borderRadius: '50%', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}

const LocalesCarousel = () => {
  // Generar array de imágenes de la carpeta cat
  const catImages = [
    { id: 1, image: '/cat/catAgos25_page-0001.webp', title: 'Page 1' },
    { id: 2, image: '/cat/catAgos25_page-0002.webp', title: 'Page 2' },
    { id: 3, image: '/cat/catAgos25_page-0003.webp', title: 'Page 3' },
    { id: 4, image: '/cat/catAgos25_page-0004.webp', title: 'Page 4' },
    { id: 5, image: '/cat/catAgos25_page-0005.webp', title: 'Page 5' },
    { id: 6, image: '/cat/catAgos25_page-0006.webp', title: 'Page 6' },
    { id: 7, image: '/cat/catAgos25_page-0007.webp', title: 'Page 7' },
    { id: 8, image: '/cat/catAgos25_page-0008.webp', title: 'Page 8' },
    { id: 9, image: '/cat/catAgos25_page-0009.webp', title: 'Page 9' },
    { id: 10, image: '/cat/catAgos25_page-0010.webp', title: 'Page 10' },
    { id: 11, image: '/cat/catAgos25_page-0011.webp', title: 'Page 11' },
    { id: 12, image: '/cat/catAgos25_page-0012.webp', title: 'Page 12' },
    { id: 13, image: '/cat/catAgos25_page-0013.webp', title: 'Page 13' },
    { id: 14, image: '/cat/catAgos25_page-0014.webp', title: 'Page 14' },
    { id: 15, image: '/cat/catAgos25_page-0015.webp', title: 'Page 15' },
    { id: 16, image: '/cat/catAgos25_page-0016.webp', title: 'Page 16' },
    { id: 17, image: '/cat/catAgos25_page-0017.webp', title: 'Page 17' },
    { id: 18, image: '/cat/catAgos25_page-0018.webp', title: 'Page 18' },
    { id: 19, image: '/cat/catAgos25_page-0019.webp', title: 'Page 19' },
    { id: 20, image: '/cat/catAgos25_page-0020.webp', title: 'Page 20' },
    { id: 21, image: '/cat/catAgos25_page-0021.webp', title: 'Page 21' },
    { id: 22, image: '/cat/catAgos25_page-0022.webp', title: 'Page 22' },
    { id: 23, image: '/cat/catAgos25_page-0023.webp', title: 'Page 23' },
    { id: 24, image: '/cat/catAgos25_page-0024.webp', title: 'Page 24' }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [perView, setPerView] = useState(window.innerWidth < 700 ? 1 : 3);

  React.useEffect(() => {
    const handleResize = () => {
      setPerView(window.innerWidth < 700 ? 1 : 3);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    slides: { perView, spacing: 12 },
    mode: "snap"
  });

  return (
    <Card 
     
      style={{ height: '520px', background: 'transparent', border: 'none', boxShadow: 'none' }}
      bodyStyle={{ padding: '16px' }}
    >
      <div className="navigation-wrapper" style={{ position: 'relative', height: '420px' }}>
        <div ref={sliderRef} className="keen-slider" style={{ height: '420px', display: 'flex', alignItems: 'center' }}>
          {catImages.map((img) => (
            <div className="keen-slider__slide" key={img.id} style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <Space direction="vertical" style={{ width: '100%' }}>
                <Card.Meta
                  title={<Title level={5} style={{ margin: '10px 0 6px 0' }}>{img.title}</Title>}
                  description={null}
                />
                <Image
                  src={img.image}
                  alt={img.title}
                  style={{ width: '300px', height: '380px', objectFit: 'cover', borderRadius: '12px', marginBottom: '8px' }}
                  preview={true}
                />
              </Space>
            </div>
          ))}
        </div>
      </div>
      {loaded && instanceRef.current && (
        <div className="dots" style={{ textAlign: 'center', marginTop: 10 }}>
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  border: 'none',
                  margin: '0 4px',
                  background: currentSlide === idx ? '#fa8c16' : '#ddd',
                  cursor: 'pointer',
                  outline: 'none',
                  boxShadow: currentSlide === idx ? '0 0 4px #fa8c16' : 'none'
                }}
              ></button>
            );
          })}
        </div>
      )}
    </Card>
  );
};

export default LocalesCarousel;
