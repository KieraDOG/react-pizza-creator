import React from 'react';
import Section from '../Section';
import Item from './components/Item';

const OrderSummaryList = () => (
  <Section
    title="Order summary"
  >
    <Item 
      pizza={{
        name: 'Large (13")',
        price: 9.99,
      }}
      toppings={[{
        name: 'bacon',
        price: 0.99,
      }, {
        name: 'chili',
        price: 0.99,
      }]}
    />
    <hr />
  </Section>
);

export default OrderSummaryList;
