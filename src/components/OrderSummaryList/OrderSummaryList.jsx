import React from 'react';
import Section from '../Section';
import Item from './components/Item';

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
  </Section>
);

export default OrderSummaryList;
