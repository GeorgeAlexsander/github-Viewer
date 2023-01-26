import React from 'react';
import { Cleaner, Container, Selector } from './styles';

const Filter = () => {
  const langs = [
    { name: 'Javascript', count: 5, color: '#f1c40f' },
    { name: 'C++', count: 3, color: '#95a5a6' },
    { name: 'Python', count: 4, color: '#3498db' },
  ];

  const selectors = langs.map(({ name, count, color }) => (
    <Selector key={name.toLocaleLowerCase()} color={color}>
      <span>{name}</span>
      <span>{count}</span>
    </Selector>
  ));

  return (
    <Container>
      {selectors}
      <Cleaner>Limpar Filtros</Cleaner>
    </Container>
  );
};

export default Filter;
