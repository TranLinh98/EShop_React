import React from 'react';
import Badge from '@mui/material/Badge';
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import {
  Container,
  Wrapper,
  Left,
  SearchContainer,
  Input,
  Center,
  Logo,
  Right,
  MenuItem,
  Language,
} from './Navbar.style';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: 'gray', fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Logo>M&M.</Logo>
          </Link>
        </Center>
        <Right>
          <Link
            to={'/register'}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <MenuItem>REGISTER</MenuItem>
          </Link>

          <Link
            to={'/login'}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <MenuItem>SIGN IN</MenuItem>
          </Link>

          <Link
            to={'/cart'}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
