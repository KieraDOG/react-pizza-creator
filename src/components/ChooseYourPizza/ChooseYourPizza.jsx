import React from 'react';
import Section from '../Section';
import styled from 'styled-components';
import Size from './components/Size';
import Topping from './components/Topping/Topping';

const TOPPINGS = [
  'anchovy',
  'bacon',
  'basil',
  'chili',
  'mozzarella',
  'mushroom',
  'olive',
  'onion',
  'pepper',
  'pepperoni',
  'sweetcorn',
  'tomato',
]

const SubSection = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h3`
  color: #6E7790;
  font-size: 16px;
  position: relative;
  margin: 0;
  margin-bottom: 10px;
`;

const SizeLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SizeItem = styled.div`
  margin: 20px 0;
  width: calc(100%/3 - 20px);
`;

const ToppingLayout = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ToppingItem = styled.div`
  margin: 10px 0;
  width: calc(100%/4 - 10px);
`;

const ChooseYourPizza = () => (
  <Section
    title="Choose your pizza"
  >
    <SubSection>
      <Title>Select the size</Title>
      <SizeLayout>
        <SizeItem>
          <Size percentage={1} name={`Large (13")`} />
        </SizeItem>
        <SizeItem>
          <Size percentage={0.85} name={`Medium (11")`} />
        </SizeItem>
        <SizeItem>
          <Size percentage={0.7} name={`Small (9")`} />
        </SizeItem>
      </SizeLayout>
    </SubSection>
    <SubSection>
      <Title>Pick your toppings</Title>
      <ToppingLayout>
        {TOPPINGS.map((topping) => (
          <ToppingItem key={topping}>
            <Topping name={topping} />
          </ToppingItem>
        ))}
      </ToppingLayout>
    </SubSection>
  </Section>
);

export default ChooseYourPizza;
