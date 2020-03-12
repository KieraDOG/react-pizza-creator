import React from 'react';
import { shallow } from 'enzyme';
import Topping from './Topping';

describe('<Topping />', () => {
  let wrapper;
  let onChoose;

  beforeEach(() => {
    onChoose = jest.fn();

    wrapper = shallow((
      <Topping 
        name="bacon"
        chosen
        onChoose={onChoose}
      />
    ));
  });

  it('passes chosen to styled-component when chosen', () => {
    expect(wrapper.find('[data-testid="topping"]').prop('chosen')).toBe(true);
  });

  it('does not pass chosen to styled-component when not chosen', () => {
    wrapper.setProps({
      chosen: false,
    });

    expect(wrapper.find('[data-testid="topping"]').prop('chosen')).toBeFalsy();
  });

  it('calls onChoose on element click', () => {
    wrapper.simulate('click');
    
    expect(onChoose).toBeCalled();
  });

  it('renders name', () => {
    expect(wrapper.find('[data-testid="name"]').text()).toBe('bacon');
  });
});