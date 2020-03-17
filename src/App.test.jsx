import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import EnterYourDetails from './components/EnterYourDetails';

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('passes details to <EnterYourDetails />', () => {
    const details = {
      name: 'Alice',
    };
    
    wrapper.setState({
      details,
    });

    expect(wrapper.find(EnterYourDetails).prop('details')).toEqual(details);
  });

  it('passes new details to <EnterYourDetails /> by calling onDetailsChange', () => {
    const { onDetailChange } = wrapper.find(EnterYourDetails).props();

    const name = 'Bob';

    onDetailChange(name, 'name');

    expect(wrapper.find(EnterYourDetails).prop('details')).toEqual({
      name,
    });
  });

  it('calls console.log with details, selectedSize and chosenToppings on Place order button clicked', () => {

  });
});
