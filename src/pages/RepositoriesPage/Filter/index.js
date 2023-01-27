import React from 'react';
import PropTypes from 'prop-types';
import { Cleaner, Container, Selector } from './styles';

const Filter = ({ languages, currentLanguage, onClick }) => {
  const selectors = languages.map(({ name, count, color }) => (
    <Selector
      key={name.toLocaleLowerCase()}
      color={color}
      className={currentLanguage === name ? 'selected' : ''}
      onClick={() => onClick && onClick(name)}
    >
      <span>{name}</span>
      <span>{count}</span>
    </Selector>
  ));

  return (
    <Container>
      {selectors}
      <Cleaner onClick={() => onClick && onClick(undefined)}>
        Limpar Filtros
      </Cleaner>
    </Container>
  );
};

Filter.defaultProps = {
  currentLanguage: undefined,
  onClick: undefined,
};

Filter.propTypes = {
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      color: PropTypes.string,
    }).isRequired
  ).isRequired,
  currentLanguage: PropTypes.string,
  onClick: PropTypes.func,
};

export default Filter;
