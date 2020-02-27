import PropTypes from 'prop-types';
import React from 'react';
import pizza from './assets/pizza.svg';
import styled from 'styled-components';

const Pizza = styled.img`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  margin-right: 20px;
`;

const Layout = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Name = styled.div`
  font-size: 16px;
  color: rgba(0,0,0,0.7);
`;

const Size = ({
  percentage,
  name,
}) => {
  const size = 60 * percentage;

  return (
    <Layout>
      <Pizza size={size} src={pizza} alt={name} />
      <Name>{name}</Name>
    </Layout>
  );

}
Size.propTypes = {
  percentage: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default Size;
