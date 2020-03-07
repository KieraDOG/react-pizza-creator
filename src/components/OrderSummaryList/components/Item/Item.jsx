import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SizePropTypes from '../../../../PropTypes/Size';
import ToppingPropTypes from '../../../../PropTypes/Topping';

const Size = styled.h3`
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
  size,
  toppings,
}) => (
  <div>
    <Size>
      <Name>{size.name}</Name>
      <div>${size.price}</div>
    </Size>
    <ToppingsUnorderedList>
      {toppings.map((topping) => (
        <li key={topping.name}>
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
  size: PropTypes.shape(SizePropTypes).isRequired,
  toppings: PropTypes.arrayOf(PropTypes.shape(ToppingPropTypes)),
};

export default Item;