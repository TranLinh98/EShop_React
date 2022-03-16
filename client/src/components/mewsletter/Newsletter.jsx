import React from 'react';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import {
  Button,
  Container,
  Desc,
  Input,
  InputContainer,
  Title,
} from './Newsletter.style';

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <SendOutlinedIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
