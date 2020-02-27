import React from 'react';
import Section from './components/Section';
import styled from 'styled-components';
import EnterYourDetails from './components/EnterYourDetails';
import ChooseYourPizza from './components/ChooseYourPizza';

const Layout = styled.div`
  padding: 20px 30px;
`;

const PlaceOrderButton = styled.button`
  border: 0;
  outline: 0;
  background: #98C550;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px 15px;
  width: 100%;
  color: white;

  &:hover {
    background: #b9ea6a;
  }
`;

function App() {
  return (
    <Layout>
      <EnterYourDetails />
      <ChooseYourPizza />
      <Section
        title="Order summary"
      >
        Order summary list
      </Section>
      <PlaceOrderButton>Place order</PlaceOrderButton>
    </Layout>
  );
}

export default App;
