import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const SliderWrapper = styled.div`
  width: 1200px;
  height: 300px;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  border-radius: 10px;
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${props => (props.$active ? 1 : 0)};
  transition: opacity 0.5s ease;
  padding: 2px;
`;

const images = [
  'public/style1.avif',
  'public/style2.avif',
  'public/style3.avif',
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <SliderWrapper>
      {images.map((src, idx) => (
        <Slide key={idx} $active={current === idx}>
          <img src={src} alt={`slide-${idx}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Slide>
      ))}
    </SliderWrapper>
  );
}