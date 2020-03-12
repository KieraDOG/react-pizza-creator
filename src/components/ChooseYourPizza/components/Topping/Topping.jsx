import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';
import anchovy from './assets/anchovy.svg';
import bacon from './assets/bacon.svg';
import basil from './assets/basil.svg';
import chili from './assets/chili.svg';
import mozzarella from './assets/mozzarella.svg';
import mushroom from './assets/mushroom.svg';
import olive from './assets/olive.svg';
import onion from './assets/onion.svg';
import pepper from './assets/pepper.svg';
import pepperoni from './assets/pepperoni.svg';
import sweetcorn from './assets/sweetcorn.svg';
import tomato from './assets/tomato.svg';

const TOPPING_IMAGE = {
  anchovy,
  bacon,
  basil,
  chili,
  mozzarella,
  mushroom,
  olive,
  onion,
  pepper,
  pepperoni,
  sweetcorn,
  tomato,
};

const Layout = styled.div`
  display: flex;
  align-items: center;
  background: rgba(0,0,0,0.05);
  cursor: pointer;
  ${({ chosen }) => chosen && css`
    background: #1a98e1;
    color: white;
  `}
`;

const Image = styled.img`
  height: 30px;
  width: 30px;
  background: #e6e6e6;
  padding: 10px;
  box-sizing: content-box;
`;

const Name = styled.div`
  padding-left: 10px;
  font-weight: 300;
  text-transform: capitalize;
`;

const Topping = ({
  name,
  chosen,
  onChoose,
}) => {
  const image = TOPPING_IMAGE[name];

  return (
    <Layout data-testid="topping" chosen={chosen} onClick={onChoose}>
      <Image src={image} />
      <Name data-testid="name">{name}</Name>
    </Layout>
  );
}

Topping.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Topping;
