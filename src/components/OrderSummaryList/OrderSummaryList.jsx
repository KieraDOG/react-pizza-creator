import React from 'react';
import Section from '../Section';
import Item from './components/Item';
import styled from 'styled-components';

const Total = styled.div`
  text-align: right;
  font-size: 18px;
  font-weight: 300;
`;

const getTotal = (size, toppings) => {
  const value = toppings.reduce((prevValue, { price }) => prevValue + price, size.price);

  return value.toFixed(2);
};

const OrderSummaryList = ({
  selectedSize,
  chosenToppings,
}) => (
  <Section
    title="Order summary"
  >
    <Item 
      size={selectedSize}
      toppings={chosenToppings}
    />
    <hr />
    <Total>
      {`Total: $${getTotal(selectedSize, chosenToppings)}`}
    </Total>
  </Section>
);

export default OrderSummaryList;
