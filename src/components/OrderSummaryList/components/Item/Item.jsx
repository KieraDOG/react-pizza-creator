import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Pizza = styled.h3`
  margin: 0;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  margin-bottom: 5px;
  font-weight: 300;
`;

const ToppingsUnorderedList = styled.ul`
  margin: 0;
`;

const Topping = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3px;
  font-weight: 300;
`;

const Name = styled.div`
  text-transform: capitalize;
`;

const Item = ({
  pizza,
  toppings,
}) => (
  <div>
    <Pizza>
      <Name>{pizza.name}</Name>
      <div>${pizza.price}</div>
    </Pizza>
    <ToppingsUnorderedList>
      {toppings.map((topping) => (
        <li>
          <Topping>
            <Name>{topping.name}</Name>
            <div>${topping.price}</div>
          </Topping>
        </li>
      ))}
    </ToppingsUnorderedList>
  </div>
);

Item.defaultProps = {
  toppings: [],
};

Item.propTypes = {
  pizza: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  toppings: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
  })),
};

export default Item;