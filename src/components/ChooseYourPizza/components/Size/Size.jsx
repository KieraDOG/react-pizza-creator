import PropTypes from 'prop-types';
import React from 'react';
import pizza from './assets/pizza.svg';
import styled from 'styled-components';

const Pizza = styled.img`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  margin-right: 20px;
  border: 2px solid ${({ selected }) => selected ? '#dddddd' : 'transparent'};
  border-radius: 50%;
  padding: 2px;
`;

const Layout = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Name = styled.div`
  font-size: 16px;
  color: ${({ selected }) => selected ? '#1a98e1' : 'rgba(0,0,0,0.7)'};
`;

const Size = ({
  percentage,
  name,
  selected,
  onSelect,
}) => {
  const size = 80 * percentage;

  return (
    <Layout onClick={onSelect}>
      <Pizza size={size} src={pizza} alt={name} selected={selected} />
      <Name selected={selected}>{name}</Name>
    </Layout>
  );

};

Size.defaultProps = {
  selected: false,
}

Size.propTypes = {
  percentage: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  onSelect: PropTypes.func.isRequired,
};

export default Size;
