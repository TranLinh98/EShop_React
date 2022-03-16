import React, { useState, useEffect } from 'react';
import {
  Arrow,
  Container,
  Slide,
  Wrapper,
  InfoContainer,
  Image,
  ImgContainer,
  Title,
  Desc,
  Button,
} from './Slider.style';
import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import { sliderItems } from '../../data';

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlideIndex((slideIndex) => {
        if (slideIndex < 2) {
          return slideIndex + 1;
        }
        return 0;
      });
    }, 10000);
    return () => clearInterval(intervalId);
  }, []);

  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick('left')}>
        <ArrowLeft />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick('right')}>
        <ArrowRight />
      </Arrow>
    </Container>
  );
};

export default Slider;
