import * as React from "react";
import { useEffect } from "react";
import styled, { css } from "styled-components";
import { HalfImageText, StyledGallery } from "../styles"

const SCarouselWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  width: 50vw;
  @media (max-width: 1080px) {
    width: 100vw;
    margin-bottom: 400px;

  }
`;

interface ICarouselSlide {
  active?: boolean;
}

const SCarouselSlide = styled.div<ICarouselSlide>`
  opacity: ${props => (props.active ? 1 : 0)};
  z-index: ${props => (props.active ? 0 : -1)};
  transition: all 0.5s ease;
  width: 50vw;
  align-items: stretch;
  display: flex;
  position: absolute;
  height: 100%;
  margin: 0;
  padding: 0;
  flex-grow: 1;
  @media (max-width: 1080px) {
    width: 100vw;
  }
`;

interface ICarouselProps {
  currentSlide: number;
}

const SCarouselSlides = styled.div<ICarouselProps>`
  display: fixed;
  flex-direction: row;
  align-items: stretch;
  transition: all 0.5s ease;
  margin: 0;
  padding: 0;
  flex-grow: 1;
  width: 50vw;
  @media (max-width: 1080px) {
    width: 100vw;
  }
`;

interface IProps {
  children: JSX.Element[];
}

const Gallery = ({ children }: IProps) => {

  const [currentSlide, setCurrentSlide] = React.useState(0);
  const current = React.useRef(currentSlide);
  current.current = currentSlide;

  const activeSlide = children.map((slide, index) => (
    <SCarouselSlide active={currentSlide === index} key={index}>
      {slide}
    </SCarouselSlide>
  ));

  const moveRight = () => {
    setCurrentSlide((current.current - 1 + activeSlide.length) % activeSlide.length);
  };
  const moveLeft = () => {
    setCurrentSlide((current.current + 1) % activeSlide.length);
  };
  useEffect(() => {
    for (let i = 0; i < activeSlide.length; i++ ) {
      const timer = setTimeout(() => moveLeft(), 5000*(i+1));

    }
  return () => clearTimeout(timer);

  }, [,]);

  return (
    <StyledGallery right={children[0].props.right}>
      <SCarouselWrapper>
        <SCarouselSlides currentSlide={currentSlide}>
          {activeSlide}
        </SCarouselSlides>
      </SCarouselWrapper>
      <button onClick={moveRight}><div /></button>
      <button onClick={moveLeft}><div /></button>
    </StyledGallery>
  );
};

export default Gallery;
