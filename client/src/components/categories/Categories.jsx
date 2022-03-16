import React from 'react';
import { categories } from '../../data';
import CategoryItem from '../categoryItem/CategoryItem';
import { Container } from './Categories.style';

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
