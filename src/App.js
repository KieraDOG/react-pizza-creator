import React from 'react';
import styled from 'styled-components';
import ChooseYourPizza from './components/ChooseYourPizza';
import EnterYourDetails from './components/EnterYourDetails';
import OrderSummaryList from './components/OrderSummaryList';
import validateDetails from './utils/validator/validateDetails';

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

const SIZES = [{
  percentage: 1, 
  name: 'Large (13")',
  price: 13.99,
}, {
  percentage: 0.85, 
  name: 'Medium (11")',
  price: 11.99,
},
{
  percentage: 0.7, 
  name: 'Small (9")',
  price: 9.99,
}];

const TOPPINGS = [{ 
  name: 'anchovy',
  price: 0.99
}, { 
  name: 'bacon',
  price: 0.99
}, { 
  name: 'basil',
  price: 0.99
}, { 
  name: 'chili',
  price: 0.99
}, { 
  name: 'mozzarella',
  price: 0.99
}, { 
  name: 'mushroom',
  price: 0.99
}, { 
  name: 'olive',
  price: 0.99
}, { 
  name: 'onion',
  price: 0.99
}, { 
  name: 'pepper',
  price: 0.99
}, { 
  name: 'pepperoni',
  price: 0.99
}, { 
  name: 'sweetcorn',
  price: 0.99
}, { 
  name: 'tomato',
  price: 0.99
}];


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedSize: SIZES[0],
      chosenToppings: [],
      formDirty: false,
      details: {},
    };

    this.handleSelectSize = this.handleSelectSize.bind(this);
    this.handleChooseTopping = this.handleChooseTopping.bind(this);
    this.handleDetailChange = this.handleDetailChange.bind(this);
  }

  handleDetailChange(value, key) {
    this.setState((prevState) => ({
      details: {
        ...prevState.details,
        [key]: value,
      },
    }));
  }

  handleSelectSize(size) {
    this.setState({
      selectedSize: size,
    });
  }

  handleChooseTopping(topping) {
    this.setState((prevState) => {
      const { chosenToppings } = prevState;

      if (chosenToppings.includes(topping)) {
        return {
          chosenToppings: chosenToppings.filter((chosenTopping) => chosenTopping !== topping),
        };
      }

      return {
        chosenToppings: [
          ...chosenToppings,
          topping,
        ],
      };
    })
  }

  render() {
    const { selectedSize, chosenToppings, details, formDirty } = this.state;

    return (
      <Layout>
        <EnterYourDetails 
          formDirty={formDirty}
          details={details}
          onDetailChange={this.handleDetailChange}
        />
        <ChooseYourPizza 
          sizes={SIZES}
          selectedSize={selectedSize}
          onSizeSelected={this.handleSelectSize}
          toppings={TOPPINGS}
          chosenToppings={chosenToppings}
          onToppingChosen={this.handleChooseTopping}
        />
        <OrderSummaryList 
          selectedSize={selectedSize}
          chosenToppings={chosenToppings}
        />
        <PlaceOrderButton 
          onClick={() => {
            this.setState({ formDirty: true });

            let detailsValid = validateDetails(details);

            if (!detailsValid) {
              return;
            }

            alert('PLACE ORDER');
          }}
        >
          Place order
        </PlaceOrderButton>
      </Layout>
    );
  }
}

export default App;
