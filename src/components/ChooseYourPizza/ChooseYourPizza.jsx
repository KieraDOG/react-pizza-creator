import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import SizePropTypes from '../../PropTypes/Size';
import ToppingPropTypes from '../../PropTypes/Topping';
import ErrorMessage from '../ErrorMessage';
import Section from '../Section';
import Size from './components/Size';
import Topping from './components/Topping';

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

const TitleWithErrorMessage = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChooseYourPizza = ({
  sizes,
  formDirty,
  selectedSize,
  onSizeSelected,
  toppings,
  chosenToppings,
  onToppingChosen,
}) => (
  <Section
    title="Choose your pizza"
  >
    <SubSection>
      <Title>Select the size</Title>
      <SizeLayout>
        {sizes.map((size) => (
          <SizeItem key={size.name}>
            <Size 
              percentage={size.percentage} 
              name={size.name} 
              selected={selectedSize === size}
              onSelect={() => onSizeSelected(size)}
            />
          </SizeItem>
        ))}
      </SizeLayout>
    </SubSection>
    <SubSection>
      <TitleWithErrorMessage>
        <Title>Pick your toppings</Title>
        {formDirty && chosenToppings.length === 0 && (
          <ErrorMessage>Please pick at least one topping</ErrorMessage>
        )}
      </TitleWithErrorMessage>
      <ToppingLayout>
        {toppings.map((topping) => (
          <ToppingItem key={topping.name}>
            <Topping 
              name={topping.name} 
              chosen={chosenToppings.includes(topping)}
              onChoose={() => onToppingChosen(topping)}
            />
          </ToppingItem>
        ))}
      </ToppingLayout>
    </SubSection>
  </Section>
);

ChooseYourPizza.propTypes = {
  chosenToppings: [],
};

ChooseYourPizza.propTypes = {
  sizes: PropTypes.arrayOf(PropTypes.shape(SizePropTypes)).isRequired,
  selectedSize: PropTypes.shape(SizePropTypes).isRequired,
  onSizeSelected: PropTypes.func.isRequired,
  toppings: PropTypes.arrayOf(PropTypes.shape(ToppingPropTypes)).isRequired,
  chosenToppings: PropTypes.arrayOf(PropTypes.shape(ToppingPropTypes)),
  onToppingChosen: PropTypes.func.isRequired,
}

export default ChooseYourPizza;
